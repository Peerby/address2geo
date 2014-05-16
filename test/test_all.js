/*jslint node: true */
/*global describe, it, before, beforeEach, after, afterEach */

"use strict";
var _ = require('underscore');
var expect = require('expect.js');
var address4geo = require('../index.js');


/*
    Format test-definitions
*/


// List of all country codes defined in formats.js
var countryCodes = ['defaults', 'at', 'be', 'de', 'fr', 'ie', 'nl', 'gb', 'us'];

// List of possible fields in the address object
var addressFields = [
    'addressLineOne', 'addressLineTwo',
    'streetName', 'houseNumber',
    'locality', 'state', 'county', 'country',
    'zip'
];

// Every address object should have the following fields / properties
var ensureAddressFields = ['country'];

// For each field we recognise only the following options
var fieldOptions = {
    example: {
        type: typeof ""
    },
    optional: {
        type: typeof true
    },
    regexp: {
        type: typeof ""
    },
    values: {
        type: typeof []
    }
};


/*
    Start tests
*/


// Make sure we have a parsable package.json
describe('package.json', function () {
    var pjson;

    it('should be parsable as JSON', function () {
        pjson = require('../package.json');
    });
    it('should have a name', function () {
        expect(pjson.name).to.be('address4geo');
    });
});


describe('all country formats', function () {
    // Valid list of country-keys (defaut, nl, be, etc)
    it('should contain known countries', function () {
        var keys = _.keys(address4geo.formats()).sort();
        expect(keys).to.eql(countryCodes.sort());
    });

    // Validate field properties of the listed fields
    it('should have valid field definitions', function () {
        _.each(address4geo.formats(), function (country) {
            expect(country).to.have.property('fields');
            expect(country.fields).to.have.keys(ensureAddressFields);

            _.each(_.keys(country.fields), function (field) {
                expect(addressFields).to.contain(field);

                var fieldDef = country.fields[field];
                _.each(_.keys(fieldDef), function (opt) {
                    expect(fieldOptions).to.have.property(opt);
                    expect(fieldDef[opt]).to.be.an(fieldOptions[opt].type);
                });
            });
        });
    });

    // Fields mentioned in the presentation should exist in the fields list
    it('should have valid presentation definitions', function () {
        _.each(address4geo.formats(), function (country) {
            expect(country).to.have.property('presentation');

            _.each(country.presentation, function (line) {
                _.each(line, function (field) {
                    expect(country.fields).to.have.property(field.fieldName);
                });
            });
        });
    });
});


describe('.format()', function () {

    var expectedDefault = {
        fields: {
            addressLineOne: {},
            addressLineTwo: {
                optional: true
            },
            locality: {
                optional: true
            },
            zip: {
                optional: true
            },
            country: {}
        },
        presentation: [
            [{fieldName: 'addressLineOne' }],
            [{fieldName: 'addressLineTwo' }],
            [{fieldName: 'locality' }],
            [{fieldName: 'zip'}]
        ],
        geoTemplate: "<%= addressLineOne %>, <%= addressLineTwo %>, <%= zip %>, <%= locality %>, <%= country %>"
    };

    it('should return default format when no country is passed', function () {
        expect(address4geo.format()).to.eql(expectedDefault);
    });
    it('should return default format when unknown country is passed', function () {
        expect(address4geo.format('blahblah')).to.eql(expectedDefault);
    });

    it("should return 'nl' structure when 'nl' is passed", function () {
        var expected = {
            "fields": {
                streetName: {
                    example: "Hoofdstraat",
                    optional: true,
                },
                houseNumber: {
                    example: "101C"
                },
                zip: {
                    example: "1017HG",
                    regexp: '^\\d{4}\\s?\\w{2}$'
                },
                country: {}
            },
            presentation: [
                [{fieldName: "streetName"}, {fieldName: "houseNumber", width: 0.3}],
                [{fieldName: "zip"}]
            ],
            geoTemplate:
                "<%= streetName %> <%= houseNumber %>, <%= zip %>, The Netherlands"
        };
        expect(address4geo.format('nl')).to.eql(expected);
    });
});


describe('.geostring', function () {

    it('should return a valid geostring for a nl addres', function () {
        var address = {
            streetName: 'Herengracht',
            houseNumber: 182,
            zip: '1122AA',
            locality: 'Amsterdam',
            country: 'nl'
        };
        var expected = 'Herengracht 182, 1122AA, The Netherlands';

        var geostring = address4geo.geostring(address);
        expect(geostring).to.be.equal(expected);
    });

    it('should return a valid geostring for a default address in an imaginary country', function () {
        var address = {
            addressLineOne: 'Unknownstr 182',
            addressLineTwo: 'Unknownaddresss Apt',
            zip: '1234XY',
            locality: 'Unknowncity',
            state: 'Unknownstate',
            country: 'XX'
        };
        var expected = 'Unknownstr 182, Unknownaddresss Apt, 1234XY, Unknowncity, XX';

        var geostring = address4geo.geostring(address);
        expect(geostring).to.be.equal(expected);
    });

    it('should return a valid geostring for a default address in an existing country', function () {
        var address = {
            addressLineOne: 'Unknownstr 182',
            addressLineTwo: 'Unknownaddresss Apt',
            zip: '1234XY',
            locality: 'Unknowncity',
            state: 'Unknownstate',
            country: 'ky'
        };
        var expected = 'Unknownstr 182, Unknownaddresss Apt, 1234XY, Unknowncity, Cayman Islands';

        var geostring = address4geo.geostring(address);
        expect(geostring).to.be.equal(expected);
    });

    var us = {
        fields: {
            streetName: {},
            houseNumber: {},
            zip: {
                regexp: '^\\d{5}(-\\d{4})?$'    // '12345-0011' or '12345')
            },
            country: {}
        },
        presentation: [
            [{fieldName: 'houseNumber', width: 0.2 }, {fieldName: 'streetName'}],
            [{fieldName: 'zip'}]
        ],
        geoTemplate: "<%= zip %>, United States, <%= streetName %>, <%= houseNumber %>"
    };


    it('should contain all required fields', function() {
        _.each(countryCodes, function (countryCode) {
            var format = address4geo.format(countryCode),
                geoTemplate = format.geoTemplate;

            var fieldsNotFound = [];
            _.each(format.fields, function (val, key) {
                if (key === 'country') {
                    return;
                }

                if (val.optional) {
                    return;
                }
                var containsField = geoTemplate.split(key).length > 1;

                if (!containsField) {
                    fieldsNotFound.push(countryCode + ' template does not contain ' + key);
                }
            });

            expect(fieldsNotFound).to.eql([]);
        });
    });

});


describe('.validate()', function () {

    it('should return error when country is missing', function () {
        var result = address4geo.validate({});
        expect(result).to.eql([{country: 'Missing'}]);
    });

    it('should return [] when passed valid data', function () {
        var validData = {
            streetName: 'Blahblahgracht',
            houseNumber: '123C',
            zip: '1111AA',
            country: 'nl'
        };
        var result = address4geo.validate(validData);
        expect(result).to.eql([]);
    });

    it("should return [{zip: 'Missing'}] when zip is missing", function () {
        var invalidData = {
            streetName: 'Blahblahgracht',
            houseNumber: '123C',
            country: 'nl'
        };
        var result = address4geo.validate(invalidData);
        expect(result).to.eql([{zip: 'Missing'}]);
    });

    it("should return [{zip: 'Regexp fail'}] when regexp matching fails", function () {
        var invalidData = {
            streetName: 'Blahblahgracht',
            houseNumber: '123C',
            zip: 'AA1111',
            country: 'nl'
        };
        var result = address4geo.validate(invalidData);
        expect(result).to.eql([{zip: 'Regexp fail'}]);
    });

    it("should return ok when a valid county is passed", function () {
        var invalidCounty = {
            addressLineOne: 'Blahblahgracht 123C',
            locality: 'locality',
            zip: 'zip',
            county: 'Carlow',
            country: 'ie'
        };
        var result = address4geo.validate(invalidCounty);
        expect(result).to.eql([]);
    });

    it("should return [{county: 'Invalid value'}] when unknown county is passed", function () {
        var invalidCounty = {
            addressLineOne: 'Blahblahgracht 123C',
            locality: 'locality',
            zip: 'zip',
            county: 'onbekend',
            country: 'ie'
        };
        var result = address4geo.validate(invalidCounty);
        expect(result).to.eql([{county: 'Invalid value'}]);
    });

    it("should return an error when extra data is passed", function () {
        var validData = {
            streetName: 'Blahblahgracht',
            houseNumber: '123C',
            zip: '1111AA',
            country: 'nl',
            extraField: 'Oh noes'
        };
        var result = address4geo.validate(validData);
        expect(result).to.eql([{extraField: 'Unknown field'}]);
    });
});


describe('.isValid()', function () {
    it('should return true when data is fine', function () {
        var validData = {
            streetName: 'Blahblahgracht',
            houseNumber: '123C',
            zip: '1111AA',
            country: 'nl'
        };
        var result = address4geo.isValid(validData);
        expect(result).to.eql(true);
        validData.zip = '1111 AA';
        expect(address4geo.isValid(validData)).to.eql(true);
    });


    it("should return false on invalid data", function () {
        var invalidData = {
            streetName: 'Blahblahgracht',
            houseNumber: '123C',
            country: 'nl'
        };
        var result = address4geo.isValid(invalidData);
        expect(result).to.eql(false);
    });
});

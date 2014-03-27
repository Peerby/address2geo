/*jslint node: true */
/*global describe, it, before, beforeEach, after, afterEach */

"use strict";
var _ = require('underscore');
var expect = require('expect.js');
var address4geo = require('../index.js');



var countryCodes = ['defaults', 'be', 'ie', 'nl', 'uk', 'us'];
var fieldOptions = {
    example: {
        type: typeof ""
    },
    optional: {
        type: typeof true
    },
    regexp: {
        type: typeof /\d+/
    },
    values: {
        type: typeof []
    }
};


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

            _.each(_.keys(country.fields), function (field) {
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
            addressLineTwo: {},
            locality: {},
            state: {},
            zip: {}
        },
        presentation: [
            [{fieldName: 'addressLineOne' }],
            [{fieldName: 'addressLineTwo' }],
            [{fieldName: 'locality' }],
            [{fieldName: 'state'}, {fieldName: 'zip'}]
        ]
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
                  "streetName": {
                      "example": "Hoofdstraat"
                  },
                  "streetNumber": {
                    "example": "101C"
                  },
                  "zip": {
                      "example": "1017HG",
                      "regexp": {}
                  }
              },
              "presentation": [
                  [{fieldName: "streetName"}, {fieldName: "streetNumber", width: 0.3}],
                  [{fieldName: "zip"}]
            ]
        };
        expect(address4geo.format('nl')).to.eql(expected);
    });
});


describe('.validate()', function () {

    it('should return [] when passed valid data', function () {
        var validData = {
            streetName: 'Blahblahgracht',
            streetNumber: '123C',
            zip: '1111AA',
        };
        var result = address4geo.validate('nl', validData);
        expect(result).to.eql([]);
    });

    it("should return [{zip: 'Missing'}] when zip is missing", function () {
        var invalidData = {
            streetName: 'Blahblahgracht',
            streetNumber: '123C'
        };
        var result = address4geo.validate('nl', invalidData);
        expect(result).to.eql([{zip: 'Missing'}]);
    });

    it("should return [{zip: 'Regexp fail'}] when regexp matching fails", function () {
        var invalidData = {
            streetName: 'Blahblahgracht',
            streetNumber: '123C',
            zip: 'AA1111'
        };
        var result = address4geo.validate('nl', invalidData);
        expect(result).to.eql([{zip: 'Regexp fail'}]);
    });

    it("should return [{county: 'Invalid value'}] when unknown county is passed", function () {
        var invalidCounty = {
            addressLineOne: 'Blahblahgracht 123C',
            locality: 'locality',
            zip: 'zip',
            county: 'unknown'
        };
        var result = address4geo.validate('ie', invalidCounty);
        expect(result).to.eql([{county: 'Invalid value'}]);
    });

});

describe('.isValid()', function () {
    it('should return true when data is fine', function () {
        var validData = {
            streetName: 'Blahblahgracht',
            streetNumber: '123C',
            zip: '1111AA',
        };
        var result = address4geo.isValid('nl', validData);
        expect(result).to.eql(true);
    });


    it("should return false on invalid data", function () {
        var invalidData = {
            streetName: 'Blahblahgracht',
            streetNumber: '123C'
        };
        var result = address4geo.isValid('nl', invalidData);
        expect(result).to.eql(false);
    });
});

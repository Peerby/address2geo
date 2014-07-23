/*jslint node: true */
/*global describe, it, before, beforeEach, after, afterEach */
"use strict";
var expect = require('expect.js');
var request = require('request');

var a4g = require('../index');


/*
 * Constants
 */

var GEO_URL = "https://maps.googleapis.com/maps/api/geocode/json?address=";


/*
 * Table with test-data and results
 */

var lookupTable = [
    {
        address: {
            streetName: 'Herengracht',
            houseNumber: 182,
            zip: '1016BR',
            locality: 'Amsterdam',
            country: 'nl'
        },
        result: {
            formatted_address: 'Herengracht 182, 1016 BR Amsterdam, The Netherlands'
        }
    },
    {
        address: {
            streetName: 'Eekhout',
            houseNumber: 77,
            zip: '9620',
            locality: 'Zottegem',
            country: 'be'
        },
        result: {
            formatted_address: 'Eekhout 77, 9620 Zottegem, Belgium'
        }
    },
    {
        address: {
            streetName: 'Dobelweg',
            houseNumber: 3,
            zip: '85567',
            locality: 'Grafing',
            country: 'de'
        },
        result: {
            formatted_address: 'Dobelweg 3, 85567 Grafing, Germany'
        }
    },
    {
        address: {
            streetName: 'Rosental',
            houseNumber: 10,
            zip: '5771',
            locality: 'Leogang',
            country: 'at'
        },
        result: {
            formatted_address: 'Rosental 10, 5771 Leogang, Austria'
        }
    },
    {
        address: {
            streetName: 'Avenue des Ternes',
            houseNumber: '101C',
            zip: '75007',
            locality: 'Paris',
            country: 'fr'
        },
        result: {
            formatted_address: '101 Avenue des Ternes, 75017 Paris, France'
        }
    },
    {
        address: {
            addressLineOne: '3 brook view',
            addressLineTwo: 'Thaxted',
            zip: 'CM6 2LX',
            locality: 'Thaxted',
            country: 'gb'
        },
        result: {
            formatted_address: '3 Brook View, Thaxted, Dunmow, Essex CM6 2LX, UK'
        }
    },
    {
        address: {
            addressLineOne: '5 Presentation Row',
            addressLineTwo: 'Slievekeale',
            county: 'Waterford',
            locality: 'Waterford',
            country: 'ie'
        },
        result: {
            formatted_address: '5 Presentation Row, Slievekeale, Waterford, Ireland'
        }
    },
    {
        address: {
            streetName: 'Lake View Ave',
            houseNumber: 2400,
            locality: 'Los Angeles',
            zip: '90039',
            country: 'us'
        },
        result: {
            formatted_address: '2400 Lake View Avenue, Los Angeles, CA 90039, USA'
        }
    },
];


/*
 * Process lookupTable and check results
 */


describe('lookup test for predefined addresses', function () {
    lookupTable.forEach( function (entry) {
        describe('country: '+entry.address.country, function () {
            testAddress(entry);
        });
    });
});


function testAddress(entry) {
    it('should be a valid address', function () {
        expect(a4g.validate(entry.address)).to.eql([]);
    });

    it('Should resolve to the correct address', function (done) {
        var url = GEO_URL + a4g.geostring(entry.address);

        request(url, function (err, response, body) {
            expect(err).to.be(null);
            expect(response.statusCode).to.be(200);

            var objBody = JSON.parse(body);
            expect(objBody.results[0].formatted_address).to.be(entry.result.formatted_address);
            return done();
        });
    });
}


// Done

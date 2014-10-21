/*jslint node: true */

"use strict";
var _ = require('underscore');
var formats = require('./lib/formats');
var countries = require('./lib/countries');

/*
    Exported functions
*/

/**
 * Retrieve country address format for a specified country
 *
 * @param country string
 * @return object
 */

function format(country) {
    if ((!country) || !(country in formats)) {
        return formats.defaults;
    }
    country = String(country).toLowerCase();
    return formats[country] || formats.defaults;
}


/**
 * Build Geolocation string for a given address
 *
 * @param address
 * @return string
 */

function geostring(address) {
    //retrieve the addressFormat for the provided country
    var addressFormat = format(address.country);

    //store all fields in an object with empty strings as values
    //so that the template function can inject those fields
    var defaultAddress = {};
    _.each(addressFormat.fields, function (val, key) {
        defaultAddress[key] = '';
    });

    //overwrite the default fields (empty values) with user-provided values
    address = _.extend(defaultAddress, address);

    //use the full name of the country because it works better for reverse geocoding
    address.country = countries(address.country);

    //create a template function and run it on the address
    var template = _.template(addressFormat.geoTemplate);
    return template(address);
}


/**
 * Retrieve complete list of formats for each country
 *
 * @return object
 */

function allFormats() {
    return formats;
}


/**
 * Validates an address agains the field definitions for the given address.country
 *
 * @return
 *     list of errors on error
 *     [] when OK
 */

function validate(address) {
    var country = address.country;
    var invalidFields = [];

    // Shortcut no-country error,
    //  we are clueless without a country
    if (!country) {
        return [{country: 'Missing'}];
    }
    var fields = format(country).fields;

    function fieldError(field, message) {
        var err = {};
        err[field] = message;
        return err;
    }

    // Check if all the fields match the expectations
    _.keys(fields).forEach( function (field) {
        // Field must be defined unless marked as optional
        if (!address[field] && !fields[field].optional) {
            invalidFields.push(fieldError(field, 'Missing'));
            return;
        }
        // Field must match defined regexp
        if (fields[field].regexp && !address[field].match(fields[field].regexp)) {
            invalidFields.push(fieldError(field, 'Regexp fail'));
        }
        // Field must be one in a list of defined values
        if (fields[field].values && !_.findWhere(fields[field].values, {value: address[field]})) {
            invalidFields.push(fieldError(field, 'Invalid value'));
        }
    });

    // Check for extra fields
    // _.keys(address).forEach( function (field) {
    //     if (!(field in fields)) {
    //         invalidFields.push(fieldError(field, 'Unknown field'));
    //     }
    // });

    return invalidFields;
}


/**
 * Validates an address agains the field definitions for the given address.country
 *
 * @return true or false
 */

function isValid(address) {
    var invalidFieldsList = validate(address);
    return (invalidFieldsList.length === 0);
}


/*
    Exports
*/

module.exports = {
    format: format,
    geostring: geostring,
    validate: validate,
    isValid: isValid,

    countries: countries,
    formats: allFormats
};

/*jslint node: true */

"use strict";
var _ = require('underscore');
var formats = require('./lib/formats.js');


/*
    Exported functions
*/

/**
 * Retrieve country address format for a specified country
 *
 * @default default
 * @param country string
 * @return object
 */

function format(country) {
    if (!country) {
        return formats.defaults;
    }
    country = String(country).toLowerCase();
    return formats[country] || formats.defaults;
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

    if (!country) {
        throw new Error('No country specified');
    }
    var fields = format(country).fields;

    function fieldError(field, message) {
        var err = {};
        err[field] = message;
        return err;
    }

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
        if (fields[field].values && fields[field].values.indexOf(address[field]) === -1) {
            invalidFields.push(fieldError(field, 'Invalid value'));
        }
    });
    return invalidFields;
}


/**
 * Validates an address agains the field definitions for the given address.country
 *
 * @return true or false
 */

function isValid(address) {
    var country = address.country;
    if (!country) {
        throw new Error('No country specified');
    }

    var invalidFieldsList = validate(address);
    return (invalidFieldsList.length === 0);
}


/**
 * Exports geolookup string for a given address based on address.country
 *
 * Note: Not implemented yet
 *
 * @return String
 */

function geoString(address) {
    throw new Error('Not implemented');
}


/*
    Exports
*/

module.exports = {
    format: format,
    validate: validate,
    isValid: isValid,
    geoString: geoString,

    formats: allFormats
};

"use strict";
var _ = require('underscore');
var formats = require('./formats.js');


/*
    Exported functions
*/

function format(country) {
    if (!country) {
        return formats.defaults;
    }
    country = String(country).toLowerCase();
    return formats[country] || formats.defaults;
};


function allFormats() {
    return formats;
};


function validate(country, address) {
    var fields = format(country).fields;
    var invalidFields = [];

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


function isValid(country, address) {
    var invalidFieldsList = validate(country, address);
    return (invalidFieldsList.length === 0);
}


function geoString(country, address) {
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

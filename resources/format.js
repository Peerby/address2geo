var fs = require('fs');

/**
 * This map specifies the content on how to format the address
 * See this URL for origin reference - https://code.google.com/p/libaddressinput/source/browse/trunk/src/com/android/i18n/addressinput/AddressField.java?r=111
 *
 */
var formats = {},
    formatProps = {
        'S': 'ADMIN_AREA', //state
        'C': 'LOCALITY', //city
        'N': 'RECIPIENT', //name
        'O': 'ORGANIZATION', //organization
        '1': 'ADDRESS_LINE_1', //street1
        '2': 'ADDRESS_LINE_2', //street1
        'D': 'DEPENDENT_LOCALITY',
        'Z': 'POSTAL_CODE',
        'X': 'SORTING_CODE',
        'A': 'STREET_ADDRESS', //Deprecated
        'R': 'COUNTRY'
    };

/**
 * loads json format and populates formats object for lookups by get()
 * executes immediately when module is required
 */
(function loadFormats() {
    fs.readdirSync('./formats').forEach(function (file) {
        var route;

        if(file.substr(-5) === '.json') {
            route = require('./controllers/' + file);
            route.controller(app);
        }
    });
})();

/**
 * returns address format for given locale
 * if locale is unknown return undefined
 */
module.exports.get = function (locale) {

};
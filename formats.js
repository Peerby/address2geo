var _ = require('underscore');


/*
    Not implemented yet, borrowed from:
        http://stackoverflow.com/questions/164979/uk-postcode-regex-comprehensive#answer-7259020

    de: /^\d{2}\s?\d{3}$/, // 2 digits + [space] + 3 digits, e.g., '01000' or '01 000'
    us: /^\d{5}(-\d{4})?$/, // 5 digits  + ['-' + 4 digits], e.g., '12345-0011' or '12345')
    br: /^(([gG][iI][rR] {0,}0[aA]{2})|((([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y]?[0-9][0-9]?)|(([a-pr-uwyzA-PR-UWYZ][0-9][a-hjkstuwA-HJKSTUW])|([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y][0-9][abehmnprv-yABEHMNPRV-Y]))) {0,}[0-9][abd-hjlnp-uw-zABD-HJLNP-UW-Z]{2}))$/
*/


var defaults = {
    fields: {
        addressLineOne: {},
        addressLineTwo: {},
        locality: {},
        state: {},
        zip: {}
    },
    presentation: [
        ['addressLineOne'],
        ['addressLineTwo'],
        ['locality'],
        ['state', 'zip']
    ]
};


var nl = {
    fields: {
        streetName: {
            example: 'Hoofdstraat'
        },
        streetNumber: {
            example: '101C'
        },
        zip: {
            example: '1017HG',
            regexp: /^\d{4}\s?\w{2}$/
        }
    },
    presentation: [
        ['streetName', 'streetNumber'],
        ['zip']
    ]
};


var uk = {
    fields: {
        addressLineOne: {},
        addressLineTwo: {
            optional: true
        },
        zip: {}
    },
    presentation: [
        ['addressLineOne'],
        ['addressLineTwo'],
        ['zip'],
    ]
};


var ie = {
    fields: {
        addressLineOne: {},
        addressLineTwo: {
            optional: true
        },
        locality: {},
        zip: {},
        county: {
            values: [
                "Carlow",
                "Cavan",
                "Clare",
                "Cork",
                "Donegal",
                "Dublin",
                "Galway",
                "Kerry",
                "Kildare",
                "Kilkenny",
                "Laois",
                "Leitrim",
                "Limerick",
                "Longford",
                "Louth",
                "Mayo",
                "Meath",
                "Monaghan",
                "Offaly",
                "Roscommon",
                "Sligo",
                "Tipperary",
                "Waterford",
                "Westmeath",
                "Wexford",
                "Wicklow"
            ]
        }
    },
    presentation: [
        ['addressLineOne'],
        ['addressLineTwo'],
        ['zip'],
    ]
};


/*
    Exports
*/

module.exports = {
  defaults: defaults,
  nl: nl,
  be: nl,
  uk: uk,
  ie: ie
};

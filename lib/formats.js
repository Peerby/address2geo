/*jslint node: true */

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
        addressLineTwo: {
            optional: true
        },
        locality: {},
        zip: {},
        country: {}
    },
    presentation: [
        [{fieldName: 'addressLineOne'}],
        [{fieldName: 'addressLineTwo'}],
        [{fieldName: 'locality'}],
        [{fieldName: 'zip'}]
    ],
    geoTemplate: "<%= zip %>, <%= locality %>, <%= country %>, <%= addressLineOne %>, <%= addressLineTwo %>"
};


var nl = {
    fields: {
        streetName: {
            example: 'Hoofdstraat',
            optional: true
        },
        houseNumber: {
            example: '101C'
        },
        zip: {
            example: '1017HG',
            regexp: '^\\d{4}\\s?\\w{2}$'
        },
        country: {}
    },
    presentation: [
        [{fieldName: 'streetName'}, {fieldName: 'houseNumber', width: 0.3}],
        [{fieldName: 'zip'}]
    ],
    geoTemplate: "<%= zip %>, The Netherlands, <%= streetName %> <%= houseNumber %>"
};


var be = {
    fields: {
        streetName: {
            example: 'Hoofdstraat'
        },
        houseNumber: {
            example: '101C'
        },
        zip: {
            example: '9000',
            regexp: '^\\d{4}$'
        },
        country: {}
    },
    presentation: [
        [{fieldName: 'streetName'}, {fieldName: 'houseNumber', width: 0.3}],
        [{fieldName: 'zip'}]
    ],
    geoTemplate: "<%= zip %>, Belgium, <%= streetName %> <%= houseNumber %>"
};


var de = {
    fields: {
        streetName: {
            example: 'hauptstraße'
        },
        houseNumber: {
            example: '101C'
        },
        zip: {
            example: '10430',
            regexp: '^\\d{5}$'
        },
        country: {}
    },
    presentation: [
        [{fieldName: 'streetName'}, {fieldName: 'houseNumber', width: 0.3}],
        [{fieldName: 'zip'}]
    ],
    geoTemplate: "<%= zip %>, Germany, <%= streetName %> <%= houseNumber %>"
};


var at = {
    fields: {
        streetName: {
            example: 'hauptstraße'
        },
        houseNumber: {
            example: '101C'
        },
        zip: {
            example: '9000',
            regexp: '^\\d{4}$'
        },
        country: {}
    },
    presentation: [
        [{fieldName: 'streetName'}, {fieldName: 'houseNumber', width: 0.3}],
        [{fieldName: 'zip'}]
    ],
    geoTemplate: "<%= zip %>, Austria, <%= streetName %> <%= houseNumber %>"
};


var fr = {
    fields: {
        streetName: {
            example: 'Avenue des Ternes'
        },
        houseNumber: {
            example: '101C'
        },
        zip: {
            example: '75007',
            regexp: '^\\d{5}$'
        },
        country: {}
    },
    presentation: [
        [{fieldName: 'streetName'}, {fieldName: 'houseNumber', width: 0.3}],
        [{fieldName: 'zip'}]
    ],
    geoTemplate: "<%= zip %>, France, <%= streetName %> <%= houseNumber %>"
};


var gb = {
    fields: {
        addressLineOne: {},
        addressLineTwo: {
            optional: true
        },
        zip: {},
        country: {}
    },
    presentation: [
        [{fieldName: 'addressLineOne'}],
        [{fieldName: 'addressLineTwo'}],
        [{fieldName: 'zip'}],
    ],
    geoTemplate: "<%= zip %>, United Kingdom, <%= addressLineOne %>, <%= addressLineTwo %>"
};


var ie = {
    fields: {
        addressLineOne: {},
        addressLineTwo: {
            optional: true
        },
        locality: {},
        zip: {
            optional: true
        },
        county: {
            values: [
                {value: "Carlow"},
                {value: "Cavan"},
                {value: "Clare"},
                {value: "Cork"},
                {value: "Donegal"},
                {value: "Dublin"},
                {value: "Galway"},
                {value: "Kerry"},
                {value: "Kildare"},
                {value: "Kilkenny"},
                {value: "Laois"},
                {value: "Leitrim"},
                {value: "Limerick"},
                {value: "Longford"},
                {value: "Louth"},
                {value: "Mayo"},
                {value: "Meath"},
                {value: "Monaghan"},
                {value: "Offaly"},
                {value: "Roscommon"},
                {value: "Sligo"},
                {value: "Tipperary"},
                {value: "Waterford"},
                {value: "Westmeath"},
                {value: "Wexford"},
                {value: "Wicklow"}
            ]
        },
        country: {}
    },
    presentation: [
        [{fieldName: 'addressLineOne'}],
        [{fieldName: 'addressLineTwo'}],
        [{fieldName: 'locality'}],
        [{fieldName: 'county'}, {fieldName: 'zip', width: 0.3}]
    ],
    geoTemplate: "<%= county %>, Ireland, <%= addressLineOne %>, <%= addressLineTwo %>"
};


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


/*
    Exports
*/

module.exports = {
    defaults: defaults,
    nl: nl,
    be: be,
    de: de,
    at: at,
    fr: fr,
    gb: gb,
    ie: ie,
    us: us
};

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
        addressLineTwo: {},
        locality: {},
        state: {},
        zip: {},
        country: {}
    },
    presentation: [
        [{fieldName: 'addressLineOne'}],
        [{fieldName: 'addressLineTwo'}],
        [{fieldName: 'locality'}],
        [{fieldName: 'state'}, {fieldName: 'zip'}]
    ]
};


var nl = {
    fields: {
        streetName: {
            example: 'Hoofdstraat'
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
    ]
};


var uk = {
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
    ]
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
    ]
};


var us = {
    fields: {
        streetName: {},
        houseNumber: {},
        locality: {},
        state: {
            values: [
                {value: 'AL', name: 'Alabama'},
                {value: 'AK', name: 'Alaska'},
                {value: 'AS', name: 'American Samoa'},
                {value: 'AZ', name: 'Arizona'},
                {value: 'AR', name: 'Arkansas'},
                {value: 'CA', name: 'California'},
                {value: 'CO', name: 'Colorado'},
                {value: 'DC', name: 'Columbia'},
                {value: 'CT', name: 'Connecticut'},
                {value: 'DE', name: 'Delaware'},
                {value: 'FL', name: 'Florida'},
                {value: 'GA', name: 'Georgia'},
                {value: 'GU', name: 'Guam'},
                {value: 'HI', name: 'Hawaii'},
                {value: 'ID', name: 'Idaho'},
                {value: 'IL', name: 'Illinois'},
                {value: 'IN', name: 'Indiana'},
                {value: 'IA', name: 'Iowa'},
                {value: 'KS', name: 'Kansas'},
                {value: 'KY', name: 'Kentucky'},
                {value: 'LA', name: 'Louisiana'},
                {value: 'ME', name: 'Maine'},
                {value: 'MD', name: 'Maryland'},
                {value: 'MA', name: 'Massachusetts'},
                {value: 'MI', name: 'Michigan'},
                {value: 'MN', name: 'Minnesota'},
                {value: 'MS', name: 'Mississippi'},
                {value: 'MO', name: 'Missouri'},
                {value: 'MT', name: 'Montana'},
                {value: 'NE', name: 'Nebraska'},
                {value: 'NV', name: 'Nevada'},
                {value: 'NH', name: 'New Hampshire'},
                {value: 'NJ', name: 'New Jersey'},
                {value: 'NM', name: 'New Mexico'},
                {value: 'NY', name: 'New York'},
                {value: 'NC', name: 'North Carolina'},
                {value: 'ND', name: 'North Dakota'},
                {value: 'MP', name: 'Northern Mariana Islands'},
                {value: 'OH', name: 'Ohio'},
                {value: 'OK', name: 'Oklahoma'},
                {value: 'OR', name: 'Oregon'},
                {value: 'PA', name: 'Pennsylvania'},
                {value: 'PR', name: 'Puerto Rico'},
                {value: 'RI', name: 'Rhode Island'},
                {value: 'SC', name: 'South Carolina'},
                {value: 'SD', name: 'South Dakota'},
                {value: 'TN', name: 'Tennessee'},
                {value: 'TX', name: 'Texas'},
                {value: 'UM', name: 'US Minor Outlying Islands'},
                {value: 'UT', name: 'Utah'},
                {value: 'VT', name: 'Vermont'},
                {value: 'VI', name: 'Virgin Islands'},
                {value: 'VA', name: 'Virginia'},
                {value: 'WA', name: 'Washington'},
                {value: 'WV', name: 'West Virginia'},
                {value: 'WI', name: 'Wisconsin'},
                {value: 'WY', name: 'Wyoming'}
            ]
        },
        zip: {
            regexp: '^\\d{5}(-\\d{4})?$'    // '12345-0011' or '12345')
        },
        country: {}
    },
    presentation: [
        [{fieldName: 'houseNumber', width: 0.2 }, {fieldName: 'streetName'}],
        [{fieldName: 'locality'}],
        [{fieldName: 'state'}, {fieldName: 'zip'}]
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
  ie: ie,
  us: us
};
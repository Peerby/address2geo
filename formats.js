var toImplement = {
	zipValidation: {
		de: /^\d{2}\s?\d{3}$/, // 2 digits + [space] + 3 digits, e.g., '01000' or '01 000'
		us: /^\d{5}(-\d{4})?$/, // 5 digits  + ['-' + 4 digits], e.g., '12345-0011' or '12345')
		br: /^(([gG][iI][rR] {0,}0[aA]{2})|((([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y]?[0-9][0-9]?)|(([a-pr-uwyzA-PR-UWYZ][0-9][a-hjkstuwA-HJKSTUW])|([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y][0-9][abehmnprv-yABEHMNPRV-Y]))) {0,}[0-9][abd-hjlnp-uw-zABD-HJLNP-UW-Z]{2}))$/
		/*( ^ this validation was taken from http://stackoverflow.com/questions/164979/uk-postcode-regex-comprehensive#answer-7259020 )*/
	}
}

module.exports = {
	defaults: [
		[{
			name: 'addressLineOne'
		}],
		[{
			name: 'addressLineTwo'
		}],
		[{
			name: 'locality'
		}],
		[{
			name: 'state'
		},
		{
			name: 'zip'
		}],
	],
	be: [
		[{
			name: 'streetName',
			example: 'Hoofdstraat'
		},
		{
			name: 'streetNumber',
			example: '101C'
		}],
		[{
			name: 'zip',
			example: '1017HG'
		}]
	],
	ie: [
		[{
			name: 'addressLineOne'
		}],
		[{
			name: 'addressLineTwo',
			optional: true
		}],
		[{
			name: 'locality'
		}],
		[{
			name: 'county',
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
		}],
	],
	nl: [
		[{
			name: 'streetName',
			example: 'Hoofdstraat'
		},
		{
			name: 'streetNumber',
			example: '101C'
		}],
		[{
			name: 'zip',
			example: '1017HG',
			validator: /^\d{4}\s?\w{2}$/ // 4 digits + [space] + 2 letters, e.g., '1000 PK' or '1000PK' or '1000pk'
		}]
	],
	uk: [
		[{
			name: 'addressLineOne'
		}],
		[{
			name: 'addressLineTwo',
			optional: true
		}],
		[{
			name: 'zip'
		}]
	]
};
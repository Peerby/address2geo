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
			example: '1017HG'
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
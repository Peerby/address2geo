Address formats
================

Form design for **minimal address forms** so that user-provided address data can be successfully geocoded to a geolocation with [Google Geocoding API](https://developers.google.com/maps/documentation/geocoding/). This module currently works for the following countries (and otherwise defaults to a working format):

- be: Belgium
- ie: Ireland
- nl: Netherlands
- uk: United Kingdom
- defaults: all other countries

Details
-----------------

- `getFormat(country)` returns the address format for the specified `country` in [ISO-3166-1 Alpha-2 code format](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements)

- `getFormats()` returns a dictionary, which has a defaults property and one entry per supported country.

- Returned data is an Array: each item is an address line. Each address line is represented as an Array: each item is an object with the following properties:

	- `name`: String, type of field. Possible values:
	
		- addressLineOne
		
		- addressLineTwo
		
		- streetName
		
		- streetNumber
		
		- zip
		
		- locality

		- county

		- province

		- state

	- `values`: Array of Strings, possible values (eg. county names)
	
	- `optional`: Boolean, indicates if field is always required.
	
	- `example`: String, example of field.

- If the values of the fields are correctly provided by the user and are comma-separated concatenated, [Google Geocoding API](https://developers.google.com/maps/documentation/geocoding/) should return a geolocation that is accurately enough (needs definition).

Resources
--------------------

- http://www.uxmatters.com/mt/archives/2008/06/international-address-fields-in-web-forms.php
- http://www.grcdi.nl/Better%20data%20quality%20from%20your%20web%20form%20by%20Graham%20Rhind.pdf


Thanks
--------------------

Thanks to [adamic](https://github.com/adamlc/address-format) for sharing his address data. We used it as inspiration and included the parsed data as js in under `/source`.
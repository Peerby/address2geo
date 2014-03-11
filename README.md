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

- `formats.js` is a lookup dictonary, which has a defaults property and one entry per supported country.

- Returned data is an Array: each item is an address line. Each address line is represented as an Array: each item is an object with the following properties:

	- `name`: String, type of field. Possible values:
	
		- addressLineOne
		
		- addressLineTwo
		
		- streetName
		
		- streetNumber
		
		- zip
		
		- state
		
		- county
		
	- `values`: Array of Strings, possible values (eg. county names)
	
	- `optional`: Boolean, indicates if field is always required.
	
	- `example`: String, example of field.

- If the values of the fields are correctly provided by the user and are comma-separated concatenated, [Google Geocoding API](https://developers.google.com/maps/documentation/geocoding/) should return a geolocation that is accurately enough (needs definition).


Thanks
--------------------

Thanks to [adamic](https://github.com/adamlc/address-format) for sharing his address data. We used it as inspiration and included the parsed data as js in under `/source`.
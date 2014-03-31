Address formats
================

Form design for **minimal address forms** so that user-provided address data can be successfully geocoded to a geolocation with [Google Geocodin API](https://developers.google.com/maps/documentation/geocoding/). This module currently works for the following countries (and otherwise defaults to a working format):

- be: Belgium
- ie: Ireland
- nl: Netherlands
- uk: United Kingdom
- us: United States
- defaults: all other countries

API
-----------------

This section describes the API as exported by the module

## format([country])

returns the address-format for specified country or the 'default country' when there is no specification for that country.

## formats()

returns a list with all the formats for all the specified countries.

## validate(address)

returns an array with possible errors, empty array indicated the address is correct.

## isValid(address)

returns a boolean that indicates that the address is correct.


Definitions
-----------------

- `country` is a two-letter countrycode as listed in [ISO-3166-1 Alpha-2 code format](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements)

- `address` is an object containing key/value pairs with field: value format

	Addresses can have one or more of the following properties:

	- `addressLineOne`
	- `addressLineTwo`
	- `streetName`
	- `houseNumber`
	- `locality`
	- `state`
	- `county`
	- `zip`
	- `country`


- `format` is an object containing two sections

	- fields object
	- presentation array containing lines with fields

	see `formats.js` for details

	for the field definitions the following properties can be set:

	- `values`: Array of Strings, possible values (eg. county names)

	- `optional`: Boolean, indicates if field is always required.

	- `example`: String, example for field.

Resources
--------------------

- http://www.uxmatters.com/mt/archives/2008/06/international-address-fields-in-web-forms.php
- http://www.grcdi.nl/Better%20data%20quality%20from%20your%20web%20form%20by%20Graham%20Rhind.pdf


Thanks
--------------------

Thanks to [adamic](https://github.com/adamlc/address-format) for sharing his address data.
We used it as inspiration and included the parsed data as js in under `/resources`.


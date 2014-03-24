var formats = require('./formats.js');

module.exports = function getFormat(countryCode){
	if (!countryCode) {
		return formats.defaults;
	}

	countryCode = String(countryCode).toLowerCase();
	return formats[countryCode] || formats.defaults;
};

module.exports = function getAllFormats() {
	return formats;
};
var formats = require('./formats.js');

module.exports.getFormat = function (countryCode){
	if (!countryCode) {
		return formats.defaults;
	}

	countryCode = String(countryCode).toLowerCase();
	return formats[countryCode] || formats.defaults;
};

module.exports.getAllFormats = function () {
	return formats;
};
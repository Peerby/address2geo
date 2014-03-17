var formats = require('./formats.js');

module.exports = function getFormat(countryCode){
	return formats[countryCode] || formats.defaults;
};
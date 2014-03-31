function conv(prop) {
    var formatProps = {
        '%S': 'ADMIN_AREA', //state
        '%C': 'LOCALITY', //city
        '%N': 'RECIPIENT', //name
        '%O': 'ORGANIZATION', //organization
        '%1': 'ADDRESS_LINE_1', //street1
        '%2': 'ADDRESS_LINE_2', //street1
        '%D': 'DEPENDENT_LOCALITY',
        '%Z': 'POSTAL_CODE',
        '%X': 'SORTING_CODE',
        '%A': 'STREET_ADDRESS', //Deprecated
        '%R': 'COUNTRY'
    };
    return formatProps[prop];
}

var _ = require('underscore');

function getFormat (formatString) {
    var formatArray = [];
    for (var i=0;i<formatString.length;i++) {
        if (formatString[i] === '%') {
            formatArray.push(formatString.slice(i,i+2));
        }
    }

    var newFormatArray = [[]];
    _.each(formatArray, function (prop) {
        if (prop === '%n') {
            newFormatArray.push([]);
        } else {
            newFormatArray[newFormatArray.length-1].push(conv(prop));
        }
    });
    return _.map(newFormatArray, function (val) {
        if (_.isArray(val) && val.length === 1) {
            return val[0];
        }
        return val;
    });
}

_.each(a, function(val, key) {
    if (val.fmt) {
        console.log('\n\n',key,'\n',val.fmt);
        val.format = getFormat(val.fmt);
        console.log(val.format);
    }
});

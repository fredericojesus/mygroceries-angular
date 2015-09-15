'use strict';

var $ = require('gulp-load-plugins')({lazy: true});

/**
* Log a message or series of messages using chalk's blue color.
* Can pass in a string, object or array.
*/
module.exports = {

    message: message,
    fileEvent: fileEvent

};

/**
 * When files change, log it
 * @param {Object} msg - message to be shown
 * @param {String} msg - message to be shown
 */
function message(msg) {
    if (typeof(msg) === 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                $.util.log($.util.colors.blue(msg[item]));
            }
        }
    } else {
        $.util.log($.util.colors.blue(msg));
    }
}

/**
 * When files change, log it
 * @param {Object} event - event that fired
 */
function fileEvent(event, type) {
    var srcPattern = new RegExp('/.*(?=/' + 'src/' + ')/');
    var msg = '';

    if (typeof(event) === 'string') {
        msg = 'File ' + event.replace(srcPattern, '') + ' changed/added/deleted';
    } else {
        msg = 'File ' + event.path.replace(srcPattern, '') + ' ' + event.type;
    }

    $.util.log($.util.colors.green(msg));
}

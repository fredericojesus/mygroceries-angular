'use strict';

var path = require('path');
var lodash = require('lodash');

/**
 * Show OS level notification using node-notifier
 */
module.exports = function(options) {
    var notifier = require('node-notifier');
    var notifyOptions = {
        sound: 'Bottle',
        contentImage: path.join(__dirname, 'gulp.png'),
        icon: path.join(__dirname, 'gulp.png')
    };
    lodash.assign(notifyOptions, options);
    notifier.notify(notifyOptions);
};

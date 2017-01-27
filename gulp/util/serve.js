'use strict';

var log = require('../util/log');
var browserSync = require('browser-sync');
var modRewrite  = require('connect-modrewrite');

/**
 * serve the code
 * @param  {Boolean} isDev - dev or build mode
 */
module.exports = function(isDev) {
    var logText = '';
    var baseDir = '';

    if (isDev) {
        logText = 'serving the dev environment';
        baseDir = './';
    } else {
        logText = 'serving the dist environment';
        baseDir = './dist';
    }

    log.message('Starting BrowserSync on port 3000 ' + logText);

    browserSync({
        port: '3000',
        server: {
            baseDir: baseDir,
            middleware: [
                modRewrite([
                    '!\\.\\w+$ /index.html [L]'
                ])
            ]
        }
    });

};

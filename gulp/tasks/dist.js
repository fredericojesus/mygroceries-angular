'use strict';

var gulp = require('gulp');
var config = require('../config')();
var log = require('../util/log');
var notify = require('../util/notify');
var serve = require('../util/serve');
var browserSync = require('browser-sync');

/**
 * serve the build environment
 */
gulp.task('dist', ['optimize'], function() {
    serve(false /*isDev*/);

    /**
     * watch all app files except for index because
     * index is being injected in case of new files are added or deleted
     * (it would be an endless loop)
     */
    gulp.watch(config.watchFiles, ['optimize', browserSync.reload])
        .on('change', log.fileEvent);
});

/**
 * Build everything to distribution
 */
gulp.task('build-dist', ['optimize'], function() {
    log.message('Building everything to distribution');

    var msg = {
        title: 'gulp build-dist',
        subtitle: 'Running `gulp serve-build`',
        message: 'Deployed to the dist folder'
    };

    log(msg);
    notify(msg);

});

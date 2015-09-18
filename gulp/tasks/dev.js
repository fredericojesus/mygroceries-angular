'use strict';

var gulp = require('gulp');
var config = require('../config')();
var log = require('../util/log');
var serve = require('../util/serve');
var browserSync = require('browser-sync');
var runSequence = require('run-sequence');

var $ = require('gulp-load-plugins')({lazy: true});

/**
 * serve and watch the dev environment
 */
gulp.task('dev', function(done) {

    done = done || function() {};
    global.isDist = false;

    runSequence('clean-temp', ['lint', 'inject'], 'watch-dev', done);
});

gulp.task('watch-dev', function () {
    serve(true /*isDev*/);

    /**
     * watch all app files except for index because
     * index is being injected in case of new files are added or deleted
     * (it would be an endless loop)
     */
    $.watch(config.watchFiles, function() {
        runSequence('clean-temp-code', ['lint', 'inject'], browserSync.reload);
        // gulp.start('lint', 'inject', browserSync.reload);
    })
    .on('change', log.fileEvent);

    // gulp.watch(config.js, ['lint', browserSync.reload]);
    // gulp.watch(config.stylus, ['styles', browserSync.reload]);
    // gulp.watch([config.htmltemplates, config.index], browserSync.reload);
});

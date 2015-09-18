'use strict';

var gulp = require('gulp');
var config = require('../config')();
var log = require('../util/log');
var serve = require('../util/serve');
var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')({lazy: true});

/**
 * Compile stylus to css
 * @return {Stream}
 */
gulp.task('styles', function() {
    log.message('Compiling Stylus --> CSS');

    return gulp
        .src(config.stylus)
        //TODO it prints the error two times dunno why
        .pipe($.plumber())
        .pipe($.stylus())
        .pipe($.autoprefixer({
            browsers: ['last 2 version', '> 3%']
        }))
        .pipe($.concat('style.css'))
        .pipe(gulp.dest(config.temp));
});

/**
 * Wactch stylus files in dev environment
 */
gulp.task('stylus-watcher', function () {
    serve(true /*isDev*/);
    gulp.watch([config.stylus], ['styles', browserSync.reload]);
});

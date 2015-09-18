'use strict';

var gulp = require('gulp');
var config = require('../config')();
var log = require('../util/log');

var $ = require('gulp-load-plugins')({lazy: true});

/**
 * Inject bower dependencies into the index.html
 * @return {Stream}
 */
gulp.task('inject-bower', function() {
    log.message('Injecting bower js and css dependencies into the index.html');

    var wiredep = require('wiredep').stream;
    var options = config.getWiredepDefaultOptions();

    return gulp
        .src(config.index)
        .pipe(wiredep(options))
        .pipe(gulp.dest(config.root));
});

/**
 * Inject app dependencies dependencies into the index.html
 * @return {Stream}
 */
gulp.task('inject', ['inject-bower', 'styles', 'templatecache', 'replace-svg-path'], function() {
    log.message('Injecting our app js and css dependencies into the index.html');

    return gulp
        .src(config.index)
        .pipe($.inject(gulp.src(config.css)))
        .pipe($.inject(gulp.src(config.js)))
        .pipe(gulp.dest(config.root));
});

/**
 * Replaces the material design icons path
 * because it defers in dev and dist environments
 * @return {Stream}
 */
gulp.task('replace-svg-path', function() {
    return gulp
        .src(config.appConfigJs)
        .pipe($.if(global.isDist, $.replace('/src/images', '/images')))
        .pipe(gulp.dest(config.temp));
});

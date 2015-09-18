'use strict';

var gulp = require('gulp');
var config = require('../config')();
var log = require('../util/log');
var pngquant = require('imagemin-pngquant');

var $ = require('gulp-load-plugins')({lazy: true});

/**
 * Compress images
 * @return {Stream}
 */
gulp.task('images', function() {
    log.message('Compressing and copying images');

    return gulp
        .src(config.images)
        //TODO learn to minify svg
        // .pipe($.plumber())
        // .pipe($.imagemin({
        //     progressive: true,
        //     svgoPlugins: [{removeViewBox: false}],
        //     use: [pngquant()]
        // }))
        .pipe(gulp.dest(config.dist + 'images'));
});

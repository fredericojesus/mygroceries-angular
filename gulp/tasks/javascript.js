'use strict';

var config = require('../config');
var handleErrors = require('../util/handleErrors');
var gulp = require('gulp');
var gulpif = require('gulp-if');
var minifyHtml = require('gulp-minify-html');
var templateCache = require('gulp-angular-templatecache');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

/*
 * JavaScript compilation
 */
gulp.task('js', function() {
    return gulp.src([config.scripts.src, config.views.src])
        .pipe(gulpif(!global.isProd, sourcemaps.init()))
        .pipe(gulpif(/\.html$/, minifyHtml({
            empty: true
        })))
        .pipe(gulpif(/\.html$/, templateCache()))
        .pipe(uglify({
            mangle: false
        }))
        .on('error', handleErrors)
        .pipe(concat('app.min.js'))
        .pipe(gulpif(!global.isProd, sourcemaps.write('.')))
        .pipe(gulp.dest(config.scripts.dest));
});

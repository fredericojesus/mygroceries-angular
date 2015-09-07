'use strict';

var config = require('../config');
var handleErrors = require('../util/handleErrors');
var gulp = require('gulp');
var gulpif = require('gulp-if');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

/**
 * Stylus compilation
 */
gulp.task('styles', function() {
  return gulp.src(config.styles.src)
    .pipe(gulpif(!global.isProd, sourcemaps.init()))
    .pipe(stylus())
    .pipe(autoprefixer('last 2 versions', '> 1%', 'ie 8'))
    .on('error', handleErrors)
    .pipe(concat('style.min.css'))
    .pipe(minifyCSS())
    .pipe(gulpif(!global.isProd, sourcemaps.write('.')))
    .pipe(gulp.dest(config.styles.dest));
});

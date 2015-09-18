'use strict';

var gulp = require('gulp');
var config = require('../config')();
var log = require('../util/log');
var del = require('del');

var $ = require('gulp-load-plugins')({lazy: true});

/**
 * Remove all files from the dist and temp folders
 * @param {Function} done - callback when complete
 */
gulp.task('clean', function(done) {
    var delconfig = [].concat(config.dist, config.temp);
    log.message('Cleaning: ' + $.util.colors.blue(delconfig));
    del(delconfig).then(function() {
        done();
    });
});

/**
 * Remove all files from the temp folder
 * @param {Function} done - callback when complete
 */
gulp.task('clean-temp', function(done) {
    clean(config.temp, done);
});

/**
 * Remove all files from the dist folder
 * @param {Function} done - callback when complete
 */
gulp.task('clean-dist', function(done) {
    clean(config.dist, done);
});

/**
 * Remove all js and css from the temp folder
 * @param  {Function} done - callback when complete
 */
gulp.task('clean-temp-code', function(done) {
    var files = [].concat(
        config.temp + '**/*.js',
        config.temp + '**/*.css'
    );
    clean(files, done);
});

/**
 * Remove all js and css from the dist folders
 * @param  {Function} done - callback when complete
 */
gulp.task('clean-dist-code', function(done) {
    var files = [].concat(
        config.dist + 'js/**/*.js',
        config.dist + 'styles/**/*.css'
    );
    clean(files, done);
});

/**
 * Remove all styles from the temp folder
 * @param {Function} done - callback when complete
 */
gulp.task('clean-styles', function(done) {
    clean(config.css, done);
});

/**
 * Remove all js from the temp folder
 * @param {Function} done - callback when complete
 */
gulp.task('clean-js', function(done) {
    clean(config.temp + '**/*.js', done);
});

/**
 * Remove all images from the dist folder
 * @param {Function} done - callback when complete
 */
gulp.task('clean-images', function(done) {
    clean(config.dist + 'images/**/*.*', done);
});

/**
 * Delete all files in a given path
 * @param {Array} path - array of paths to delete
 * @param {Function} done - callback when complete
 */
function clean(path, done) {
    log.message('Cleaning: ' + $.util.colors.blue(path));
    del(path).then(function() {
        done();
    });
}

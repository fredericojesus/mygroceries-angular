'use strict';

var gulp = require('gulp');
var args = require('yargs').argv;
var config = require('../config')();
var log = require('../util/log');

var $ = require('gulp-load-plugins')({lazy: true});

/**
 * Analyze source with JSHint and JSCS
 * @return {Stream}
 */
gulp.task('lint', function() {
    log.message('Analyzing source with JSHint and JSCS');

    return gulp
        .src(config.alljs)
        .pipe($.if(args.verbose, $.print()))
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish', {verbose: true}))
        // .pipe($.jshint.reporter('fail')) //this stops the watch
        .pipe($.jscs());
});

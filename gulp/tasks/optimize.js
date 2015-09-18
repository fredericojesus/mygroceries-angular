'use strict';

var gulp = require('gulp');
var args = require('yargs').argv;
var config = require('../config')();
var log = require('../util/log');

var $ = require('gulp-load-plugins')({lazy: true});

/**
 * Optimize all files, move to the dist folder,
 * and inject them into the new index.html
 * @return {Stream}
 */
gulp.task('optimize', ['inject', 'lint'], function() {
    log.message('Optimizing the js, css, and html');

    var assets = $.useref.assets({searchPath: './'});
    // Filters are named for the gulp-useref path
    var cssFilter = $.filter('**/*.css', {restore: true});
    var jsAppFilter = $.filter('**/' + config.optimized.app, {restore: true});
    var jslibFilter = $.filter('**/' + config.optimized.lib, {restore: true});

    return gulp
        .src(config.index)
        .pipe($.plumber())
        .pipe(assets) // Gather all assets from the html with useref
        // Get the css
        .pipe(cssFilter)
        .pipe($.minifyCss())
        .pipe(cssFilter.restore)
        // Get the custom javascript
        .pipe(jsAppFilter)
        .pipe($.ngAnnotate({add: true}))
        .pipe($.uglify())
        // .pipe(getHeader())
        .pipe(jsAppFilter.restore)
        // Get the vendor javascript
        .pipe(jslibFilter)
        .pipe($.uglify()) // another option is to override wiredep to use min files
        .pipe(jslibFilter.restore)
        // Take inventory of the file names for future rev numbers
        .pipe($.rev())
        // Apply the concat and file replacement with useref
        .pipe(assets.restore())
        .pipe($.useref())
        // Replace the file names in the html with rev numbers
        .pipe($.revReplace())
        .pipe(gulp.dest(config.dist));

});

'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');

/**
 * Run livereload static server
 */
gulp.task('server', function() {
    browserSync({
        server: {
            baseDir: './'
        }
    });
});

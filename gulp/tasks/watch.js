'use strict';

var config = require('../config');
var gulp = require('gulp');
var browserSync = require('browser-sync');
var runSequence = require('run-sequence');

/**
 * Serve application and watch for changes
 */
gulp.task('watch', ['server'], function() {
  return gulp.watch([
    config.scripts.src, config.views.watch, config.styles.src
  ], [
    'lint', 'styles', 'js', browserSync.reload
  ]);
});

'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')({lazy: true});

gulp.task('gh-pages', function() {
    return gulp
        .src('./dist/**/*')
        .pipe($.ghPages());
});

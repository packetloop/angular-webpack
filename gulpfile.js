'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var merge = require('merge-stream');


function lint() {
  return merge(
    gulp.src(['src/**/*_spec.js'])
      .pipe(jshint('./spec.jshintrc')),
    gulp.src(['src/**/*.js', '!src/**/*_spec.js'])
      .pipe(jshint('./.jshintrc')),
    gulp.src(['gulpfile.js', 'webpack.config.js', 'karma.conf.js'])
      .pipe(jshint('./node.jshintrc'))
  );
}


gulp.task('lint', function () {
  lint().pipe(jshint.reporter(stylish));
});


gulp.task('lint:report', function () {
  require('./gulp/lint_report')(lint());
});


gulp.task('validate', function () {
  lint().pipe(jshint.reporter('fail'));
});

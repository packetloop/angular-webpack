'use strict';
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var logCapture = require('gulp-log-capture');
var concat = require('gulp-concat');
var replace = require('gulp-replace');

module.exports = function (stream) {
  var regex = new RegExp([
    '<\\/checkstyle>',
    '<\\?xml version="1\\.0" encoding="utf-8"\\?>',
    '<checkstyle version="4\\.3">',
    ''
  ].join('\\s'), 'g');

  return stream
    .pipe(logCapture.start(console, 'log'))
    .pipe(jshint.reporter('checkstyle'))
    .pipe(logCapture.stop('xml'))
    .pipe(concat('jshint.xml'))
    .pipe(replace(regex, ''))
    .pipe(gulp.dest('reports/'));
};

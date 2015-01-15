'use strict';

var ng = require('vendor/angular');

var mod = ng.module('app.haml', []);

mod.directive('haml', require('./haml_directive'));

module.exports = mod;

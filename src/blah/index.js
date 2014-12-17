'use strict';

var angular = require('vendor/angular');

var blah = angular.module('blahBlahBlah', []);

blah
  .service('BlahService', require('./blah_service'));

module.exports = blah;

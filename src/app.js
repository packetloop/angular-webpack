var angular = require('vendor/angular');
module.exports = angular.module('app', [
  require('./hello/hello_module').name
]);

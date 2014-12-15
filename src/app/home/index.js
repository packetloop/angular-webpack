var angular = require('vendor/angular');

var home = angular.module('app.home', [
  require('../../hello').name
]);

home.controller('HomeController', require('./home_controller'));

module.exports = home;

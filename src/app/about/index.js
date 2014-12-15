var angular = require('vendor/angular');

var about = angular.module('app.about', [
  require('../../blah').name
]);

about.controller('AboutController', require('./about_controller'));
about.directive('about', require('./about_directive'));

module.exports = about;

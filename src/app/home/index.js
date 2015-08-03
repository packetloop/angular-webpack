const home = angular.module('app.home', [
  require('../../hello').name
]);

home.controller('HomeController', require('./home_controller'));
home.directive('home', require('./home_directive'));

export default home;

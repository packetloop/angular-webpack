'use strict';

module.exports = function (app) {

  var $inject = ['$routeProvider'];
  var RouterConfig = function ($routeProvider) {
    $routeProvider
      .when('/', {template: ''})
      .when('/home', require('./home/home_route')(app))
      .when('/about', require('./about/about_route')(app))
      .otherwise({redirectTo: '/'})
    ;
  };

  RouterConfig.$inject = $inject;

  return RouterConfig;
};

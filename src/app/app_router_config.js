'use strict';

function route(entry, resolve) {
  return {
    template: '<' + entry + '></' + entry + '>',
    resolve: {
      async: ['$q', function ($q) {
        var defer = $q.defer();
        resolve(defer.resolve);
        return defer.promise;
      }]
    }
  };
}


module.exports = function (app) {

  var $inject = ['$routeProvider'];
  var RouterConfig = function ($routeProvider) {
    $routeProvider
      .when('/', {template: ''})
      .when('/home', route('home', function (callback) {
        require.ensure([], function () {
          // We have to use hardcoded value for 'require' so it can be statically built
          callback(app.register(require('./home')));
        });
      }))
      .when('/about', route('about', function (callback) {
        require.ensure([], function () {
          callback(app.register(require('./about')));
        });
      }))
      .when('/haml', route('haml', function (callback) {
        require.ensure([], function () {
          callback(app.register(require('./haml')));
        });
      }))
      .otherwise({redirectTo: '/'});
  };

  RouterConfig.$inject = $inject;

  return RouterConfig;
};

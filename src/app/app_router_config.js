function route(entry, resolve) {
  return {
    template: '<' + entry + '></' + entry + '>',
    resolve: {
      async: ['$q', function ($q) {
        const defer = $q.defer();

        resolve(defer.resolve);
        return defer.promise;
      }]
    }
  };
}


const routerConfig = app => {
  const $inject = ['$routeProvider'];
  const RouterConfig = function ($routeProvider) {
    $routeProvider
      .when('/', {template: ''})
      .when('/home', route('home', callback => {
        require.ensure([], function () {
          // We have to use hardcoded value for 'require' so it can be statically built
          callback(app.register(require('./home').name));
        });
      }))
      .when('/about', route('about', callback => {
        require.ensure([], function () {
          callback(app.register(require('./about').name));
        });
      }))
      .when('/haml', route('haml', function (callback) {
        require.ensure([], function () {
          callback(app.register(require('./haml').name));
        });
      }))
      .otherwise({redirectTo: '/'});
  };

  RouterConfig.$inject = $inject;

  return RouterConfig;
};

export default routerConfig;

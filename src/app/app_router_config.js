const route = (entry, resolve) => ({
  template: '<' + entry + '></' + entry + '>',
  resolve: {
    async: ['$q', function ($q) {
      const defer = $q.defer();

      resolve(defer.resolve);
      return defer.promise;
    }]
  }
});


export default app => {
  const $inject = ['$routeProvider'];

  // We have to use hardcoded value for 'require' so it can be statically built
  const RouterConfig = function ($routeProvider) {
    $routeProvider

      .when('/', {template: ''})

      .when('/home', route('home', callback =>
        require.ensure([], () =>
          callback(app.register(require('./home').name)))))

      .when('/about', route('about', callback =>
        require.ensure([], () =>
          callback(app.register(require('./about').name)))))

      .when('/haml', route('haml', callback =>
        require.ensure([], () =>
          callback(app.register(require('./haml').name)))))

      .otherwise({redirectTo: '/'});
  };

  RouterConfig.$inject = $inject;

  return RouterConfig;
};

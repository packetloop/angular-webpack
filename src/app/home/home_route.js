module.exports = function (app) {
  return {
    template: require('./home.html'),
    controller: 'HomeController',
    controllerAs: 'this',
    resolve: {
      async: ['$q', function ($q) {
        var defer = $q.defer();
        require.ensure([], function () {
          app.register(require('./'));
          defer.resolve();
        });
        return defer.promise;
      }]
    }
  };
};


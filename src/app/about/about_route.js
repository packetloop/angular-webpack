module.exports = function (app) {
  return {
    template: require('./about.html'),
    controller: 'AboutController',
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


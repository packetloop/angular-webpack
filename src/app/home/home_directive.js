var $inject = [];
var home = function () {
  return {
    controller: 'HomeController',
    controllerAs: 'this',
    template: require('./home.html')
  }
};
home.$inject = $inject;

module.exports = home;

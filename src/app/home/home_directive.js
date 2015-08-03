const $inject = [];
const home = function () {
  require('./home.css');

  return {
    controller: 'HomeController',
    controllerAs: 'controller',
    template: require('./home.html')
  };
};

home.$inject = $inject;

export default home;

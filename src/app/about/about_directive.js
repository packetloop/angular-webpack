const $inject = [];
const about = function () {
  return {
    controller: 'AboutController',
    controllerAs: 'controller',
    template: require('./about.html')
  };
};

about.$inject = $inject;

export default about;

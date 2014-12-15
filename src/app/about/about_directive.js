var $inject = [];
var about = function () {
  return {
    controller: 'AboutController',
    controllerAs: 'this',
    template: require('./about.html')
  }
};
about.$inject = $inject;

module.exports = about;

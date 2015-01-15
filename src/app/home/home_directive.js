'use strict';

require('./home.sass');

var $inject = [];
var home = function () {
  return {
    controller: 'HomeController',
    controllerAs: 'controller',
    template: require('./home.html')
  };
};
home.$inject = $inject;

module.exports = home;

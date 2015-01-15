'use strict';

var $inject = [];
var about = function () {
  return {
    controller: 'AboutController',
    controllerAs: 'controller',
    template: require('./about.html')
  };
};
about.$inject = $inject;

module.exports = about;

'use strict';

var $inject = [];
var test = function () {

  require('./haml.sass');

  function link($scope) {
    $scope.hello = 'World';
  }

  return {
    restrict: 'E',
    link: link,
    template: require('./haml.haml')({
      title: 'I am replacing #{@title}'
    }),
    scope: {}
  };
};
test.$inject = $inject;

module.exports = test;

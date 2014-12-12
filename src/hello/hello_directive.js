var $inject = ['HelloService'];
var Hello = function (helloService) {


  function link($scope) {
    $scope.hello = helloService.hello();
  }


  return {
    template: '{{hello}}',
    restrict: 'E',
    link: link,
    scope: {}
  }

};
Hello.$inject = $inject;

module.exports = Hello;

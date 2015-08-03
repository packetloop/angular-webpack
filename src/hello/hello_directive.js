require('./hello.sass');

const $inject = ['HelloService'];
const Hello = function (helloService) {
  const link = $scope => {
    $scope.hello = helloService.hello();
  };

  return {
    template: require('./hello.html'),
    restrict: 'E',
    link,
    scope: {}
  };
};

Hello.$inject = $inject;

export default Hello;

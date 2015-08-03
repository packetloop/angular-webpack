const $inject = [];
const test = function () {
  require('./haml.sass');

  const link = $scope => {
    $scope.hello = 'World';
  };

  return {
    restrict: 'E',
    link,
    template: require('./haml.haml')({
      title: 'I am replacing #{@title}'
    }),
    scope: {}
  };
};

test.$inject = $inject;

export default test;

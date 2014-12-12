describe('Hello Directive', function () {
  'use strict';

  var helloService;
  var $scope;
  var $element;

  beforeEach(angular.mock.module(require('./../hello_module').name));

  beforeEach(angular.mock.module(function ($provide) {
    helloService = jasmine.createSpyObj('HelloService', ['hello']);
    helloService.hello.and.returnValue('test');
    $provide.value('HelloService', helloService);
  }));

  beforeEach(angular.mock.inject(function ($injector) {
    $scope = $injector.get('$rootScope').$new(true);
    $element = $injector.get('$compile')(angular.element('<hello><hello>'))($scope);
    $scope.$digest();
  }));

  it('should insert `test` into element', function () {
    expect($element.html()).toEqual('test');
  });

});

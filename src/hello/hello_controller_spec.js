'use strict';
var angular = require('vendor/angular');

describe('Hello Controller', function () {
  var helloService;
  var $scope;
  var controller;

  beforeEach(angular.mock.module(require('./index.js').name));

  beforeEach(angular.mock.module(function ($provide) {
    helloService = jasmine.createSpyObj('HelloService', ['hello']);
    helloService.hello.and.returnValue('test');
    $provide.value('HelloService', helloService);
  }));

  beforeEach(angular.mock.inject(function ($injector) {
    $scope = $injector.get('$rootScope').$new(true);
    controller = $injector.get('$controller')('HelloController');
  }));

  it('should have `test` property', function () {
    expect(controller.test).toEqual('test');
  });

});

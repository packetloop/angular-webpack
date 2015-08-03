describe('Hello Controller', () => {
  let helloService;
  let controller;

  beforeEach(() => {
    angular.module('test', [])
      .controller('HelloController', require('./hello_controller'));
  });
  beforeEach(angular.mock.module('test'));

  beforeEach(angular.mock.module($provide => {
    helloService = jasmine.createSpyObj('HelloService', ['hello']);
    helloService.hello.and.returnValue('test');
    $provide.value('HelloService', helloService);
  }));

  beforeEach(angular.mock.inject($injector => {
    controller = $injector.get('$controller')('HelloController');
  }));

  it('should have `test` property', () => {
    expect(controller.test).toEqual('test');
  });
});

describe('Hello Service', function () {
  let service;
  let helloHelloService;
  let blahService;

  beforeEach(angular.mock.module(require('./index.js').name));

  beforeEach(angular.mock.module(function ($provide) {
    helloHelloService = jasmine.createSpyObj('HelloHelloService', ['hello']);
    blahService = jasmine.createSpyObj('BlahService', ['blah']);
    $provide.value('HelloHelloService', helloHelloService);
    $provide.value('BlahService', blahService);
  }));

  beforeEach(angular.mock.inject(function ($injector) {
    service = $injector.get('HelloService');
  }));

  describe('.hello', () => {
    it('should have `hello` method', function () {
      expect(service.hello).toBeDefined();
    });

    it('should call HelloHelloService::hello', function () {
      service.hello();
      expect(helloHelloService.hello).toHaveBeenCalled();
    });

    it('should call BlahService::blah', function () {
      service.hello();
      expect(blahService.blah).toHaveBeenCalled();
    });

    it('should return mocked `test` value', function () {
      helloHelloService.hello.and.returnValue('1234');
      blahService.blah.and.returnValue('qwer');
      expect(service.hello()).toEqual('1234qwer');
    });
  });
});

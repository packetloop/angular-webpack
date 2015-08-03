describe('Hello Directive', function () {
  let helloService;
  let $scope;
  let $element;

  beforeEach(() => {
    angular.module('test', [])
      .directive('hello', require('./hello_directive'));
  });
  beforeEach(angular.mock.module('test'));

  beforeEach(angular.mock.module($provide => {
    helloService = jasmine.createSpyObj('HelloService', ['hello']);
    helloService.hello.and.returnValue('test');
    $provide.value('HelloService', helloService);
  }));

  beforeEach(angular.mock.inject($injector => {
    $scope = $injector.get('$rootScope').$new(true);
    $element = $injector.get('$compile')(angular.element('<hello><hello>'))($scope);
    $scope.$digest();
  }));

  it('should insert `test` into element', () => {
    expect($element.html()).toEqual('test');
  });

  it('should apply styles from hello.sass', () => {
    window.document.body.appendChild($element[0]);
    const styles = window.getComputedStyle($element[0]);

    expect(styles['background-color']).toEqual('rgb(255, 0, 0)');
    window.document.body.removeChild($element[0]);
  });
});

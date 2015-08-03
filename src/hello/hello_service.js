const $inject = ['HelloHelloService', 'BlahService'];
const HelloService = function (helloService, blahService) {
  this.hello = () => helloService.hello() + blahService.blah();
};

HelloService.$inject = $inject;

export default HelloService;

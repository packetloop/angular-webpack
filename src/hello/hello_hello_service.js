const $inject = [];
const HelloHelloService = function () {
  this.hello = () => 'hello';
};

HelloHelloService.$inject = $inject;

export default HelloHelloService;

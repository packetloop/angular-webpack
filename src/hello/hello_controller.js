const $inject = ['HelloService'];
const HelloController = function (helloService) {
  this.test = helloService.hello();
};

HelloController.$inject = $inject;

module.exports = HelloController;

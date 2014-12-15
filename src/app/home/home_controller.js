var $inject = ['HelloService'];
var HomeController = function (helloService) {
  this.name = 'Home: ' + helloService.hello();
};
HomeController.$inject = $inject;

module.exports = HomeController;

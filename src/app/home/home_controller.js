const $inject = ['HelloService'];
const HomeController = function (helloService) {
  this.name = `Home: ${helloService.hello()}`;
};

HomeController.$inject = $inject;

export default HomeController;

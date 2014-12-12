function HelloHelloService() {
  this.hello = function () {
    return 'hello';
  };
}
HelloHelloService.$inject = [];

module.exports = HelloHelloService;

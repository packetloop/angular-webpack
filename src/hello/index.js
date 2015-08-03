const hello = angular.module('hello', [
  require('./../blah/index').name
]);

hello
  .service('HelloService', require('./hello_service'))
  .service('HelloHelloService', require('./hello_hello_service'))
  .directive('hello', require('./hello_directive'))
  .controller('HelloController', require('./hello_controller'));

module.exports = hello;

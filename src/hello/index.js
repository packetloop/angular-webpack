var angular = require('vendor/angular');

var hello = angular.module('hello', [
  require('./../blah').name
]);

hello
  .service('HelloService', require('./hello_service'))
  .service('HelloHelloService', require('./hello_hello_service'))
  .directive('hello', require('./hello_directive'))
  .controller('HelloController', require('./hello_controller'));

module.exports = hello;

'use strict';

var $inject = ['HelloService'];
var HelloController = function(helloService) {
  this.test = helloService.hello();
};
HelloController.$inject = $inject;

module.exports = HelloController;

'use strict';

var $inject = ['HelloHelloService', 'BlahService'];
var HelloService = function (helloService, blahService) {
  this.hello = function () {
    return helloService.hello() + blahService.blah();
  };
};
HelloService.$inject = $inject;

module.exports = HelloService;

'use strict';

var $inject = ['BlahService'];
var AboutController = function (blahService) {
  this.name = 'About: ' + blahService.blah();
};
AboutController.$inject = $inject;

module.exports = AboutController;

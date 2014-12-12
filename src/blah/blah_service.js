var $inject = [];
var BlahService = function () {
  this.blah = function () {
    return 'blah';
  }
};
BlahService.$inject = $inject;

module.exports = BlahService;

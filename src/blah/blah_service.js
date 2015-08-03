const $inject = [];
const BlahService = function () {
  this.blah = () => 'blah';
};

BlahService.$inject = $inject;

module.exports = BlahService;

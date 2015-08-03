const $inject = ['BlahService'];
const AboutController = function (blahService) {
  this.name = 'About: ' + blahService.blah();
};

AboutController.$inject = $inject;

export default AboutController;

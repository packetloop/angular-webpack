const mod = angular.module('app.haml', []);

mod.directive('haml', require('./haml_directive'));

export default mod;

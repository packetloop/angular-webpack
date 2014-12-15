var angular = require('vendor/angular');
var app = angular.module('app', [
  require('vendor/angular_route').name
]);

app.config(require('./app/app_register_config')(app));
app.config(require('./app/app_router_config')(app));

module.exports = app;
global.window.app = app;

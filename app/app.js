angular.module('App', [
  'ui.router',
  'ngMaterial',
  'app.state',
  'templates-main'
])
  .config(['$mdThemingProvider', function ($mdThemingProvider) {
    'use strict';
    $mdThemingProvider.theme('default')
      .primaryPalette('teal')
      .accentPalette('pink');
  }]);

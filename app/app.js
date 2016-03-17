angular.module('App', [
  'ui.router',
  'ngMaterial',
  'app.state',
  'templates-main',
  'app.components',
  'ngMessages'
])
  .config(['$mdThemingProvider', function ($mdThemingProvider) {
    'use strict';
    $mdThemingProvider.theme('default')
      .primaryPalette('teal')
      .accentPalette('pink');
  }]);

angular.module('app.components', [
  'app.components.home',
  'app.components.register',
  'app.components.storage'
]);

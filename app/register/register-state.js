angular.module('app.components.register.state', [])
  .config(['$stateProvider', function ($stateProvider) {
    'use strict';
    $stateProvider.state('register', {
      url: '/register',
      template: 'reggg'
    });
  }]);

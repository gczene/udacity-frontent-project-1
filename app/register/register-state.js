angular.module('app.components.register.state', [])
  .config(['$stateProvider', function ($stateProvider) {
    'use strict';
    $stateProvider.state('register', {
      url: '/register',
      templateUrl: '/register/views/register.html',
      controller: 'registerCtrl'
    });
  }]);

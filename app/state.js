angular.module('app.state', [])
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    'use strict';
    console.log($stateProvider);
    $urlRouterProvider.otherwise("/");
    $stateProvider.state('home', {
      url: '/',
      template: 'test'
    });
  }]);

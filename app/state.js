angular.module('app.state', [])
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    'use strict';
    $urlRouterProvider.otherwise("/");
    $stateProvider.state('home', {
      url: '/',
      templateUrl: '/home/views/home.html'
    });
  }]);

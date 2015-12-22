angular.module('app.components.home.ctrl', [])
  .controller('homeController', ['$scope', function ($scope) {
    'use strict';
    $scope.events = [{
      label: 'first event'
    }];
  }]);

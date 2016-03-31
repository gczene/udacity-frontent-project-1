angular.module('app.components.register.ctrl', [])
  .controller('registerCtrl', ['$scope', 'storageService', '$state', function ($scope, storageService, $state) {
    'use strict';

    $scope.submit = function (regForm) {
      if (regForm.$valid) {
        $state.go('register.done');
      }
    };
  }]);

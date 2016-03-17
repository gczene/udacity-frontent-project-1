angular.module('app.components.register.ctrl', [])
  .controller('registerCtrl', ['$scope', function ($scope) {
    'use strict';

    $scope.submit = function (regForm) {
      if (regForm.$valid) {
        // save data
        return;
      }
    };
  }]);

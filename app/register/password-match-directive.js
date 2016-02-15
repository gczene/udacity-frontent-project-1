angular.module('app.components.register.passwordMatch.directive', [])
  .directive('passwordMatch', function () {
    'use strict';
    return {
      require: "ngModel",
      scope: {
        otherPassword: '=passwordMatch'
      },
      link: function (scope, element, attrs, ngModel) {
        ngModel.$validators.passwordMatch = function (modelValue) {
          return modelValue === scope.otherPassword;
        };
        scope.$watch('otherPassword', function () {
          ngModel.$validate();
        });
      }
    };
  });

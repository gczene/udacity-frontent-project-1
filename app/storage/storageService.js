angular.module('app.components.storage.service', [])
  .factory('storageService', ['$window', function ($window) {
    'use strict';

    return {
      setItem: function (key, value) {
        $window.localStorage.setItem(key, value);
        return this;
      },
      getItem: function (key) {
        return $window.getItem(key) || '';
      }
    };
  }]);

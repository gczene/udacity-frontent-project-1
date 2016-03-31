angular.module('app.components.event.state', [])
  .config(['$stateProvider', function ($stateProvider) {
    'use strict';
    $stateProvider.state('events', {
      url: '/events',
      abstract: true
    })
      .state('events.new', {
        url: '/new',
        views: {
          '@': {
            templateUrl: '/event/views/event-new.html'
          }
        }
      });
  }]);

'use strict';

angular.module('studyBuddy', ['restangular', 'ui.router', 'firebase'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      });

    $urlRouterProvider.otherwise('/');
  })
;

'use strict';

angular.module('studyBuddy', ['restangular', 'ui.router', 'firebase'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/group/group.html',
        controller: 'GroupCtrl',
        controllerAs: 'groups'
      });

    $urlRouterProvider.otherwise('/');
  })
;

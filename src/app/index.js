'use strict';

angular.module('studyBuddy', ['restangular', 'ui.router', 'firebase'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        
        .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
    })
        .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'app/dashboard/dashboard.html',
        controller: 'DashboardController',
        controllerAs: 'dash'
    })
        .state('group', {
        url: '/create_group',
        templateUrl: 'app/group/group.html',
        controller: 'GroupCtrl',
        controllerAs: 'groups'
    })
; //end of states

    $urlRouterProvider.otherwise('/');
  })

    .factory('Auth', function($firebaseObject){
        var auth = new Firebase('https://study-buddy.firebaseio.com/groups');
        var currentUser = {};
        
        return {
            
            onAuth: function(creds){
                auth.onAuth(function(data){
                    creds(updateUser(data));
                })
            },
            
            fbLogin: function(){
                return auth.authWithOAuthPopup("facebook", function(error, authData) {
                    console.log(authData)
                if (error) {
                    console.log("Login Failed!", error);
                } else {
                    console.log("Authenticated successfully with payload:", authData);
        }
      }, {remember: "sessionOnly"})
    },
            }
        };
}) //end auth factory

; // end of config

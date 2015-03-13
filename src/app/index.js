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
                    console.log("Authenticated successfully");
                }
                }, {remember: "sessionOnly"})
            },
            
            logout: function(){
                auth.unauth();
                console.log("goodbye")
            },
            
            loggedIn: function(){
                if(auth.getAuth()){
                    return true;
                }
            }
        }; //end return
    function updateUser(authdUser){
        console.log(authdUser)
        if(authdUser === null){
            return null;
        }
    }
}) //end auth factory

; // end of config

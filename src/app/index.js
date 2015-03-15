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
        .state('list', {
        url: '/list',
        templateUrl: 'app/list/list.html',
        controller: 'ListController',
        controllerAs: 'list'
    })
; //end of states

    $urlRouterProvider.otherwise('/');
  })

    .factory('Auth', function($firebaseObject, $state){
        var auth = new Firebase('https://study-buddy.firebaseio.com/users');
//        var groupList = new Firebase('https://study-buddy.firebaseio.com/groups')
        
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
                    $state.go('dashboard');
                    console.log("Authenticated successfully");
                }
                }, {remember: "sessionOnly"})
            },
            
            logout: function(){
                auth.unauth();
                $state.go('home');
                console.log("goodbye");
            },
            
            loggedIn: function(){
                if(auth.getAuth()){
                    return true;
                } else {
                    $state.go('home');
                }
            }
        }; //end return
    
    function updateUser(authdUser, $firebaseArray){
        console.log(authdUser)
        if(authdUser === null){
            return null;
        }
        //way to set facebookID as a child of users in fb object
        var user = auth.child(authdUser.facebook.id); 
        
        // sending this info to firebase
        user.update({
            uid: authdUser.uid,
            fb: authdUser.facebook,
            name: authdUser.facebook.displayName
        });
        
        user = $firebaseObject(
            auth.child(authdUser.facebook.id)
        );
        return user;
    }
    
}) //end auth factory

; // end of config

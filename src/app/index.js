'use strict';

angular.module('studyBuddy', ['ngAnimate', 'restangular', 'ui.router', 'ui.bootstrap', 'firebase', 'sticky'])
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
        .state('manage', {
        url: '/manage',
        templateUrl: 'app/manage/manage.html',
        controller: 'ManageController',
        controllerAs: 'manage'
    })
; //end of states

    $urlRouterProvider.otherwise('/');
  })

    .factory('Auth', function($firebaseObject, $state){
        var auth = new Firebase('https://study-buddy.firebaseio.com/users');
        
        return {
            
            onAuth: function(creds){
                auth.onAuth(function(data){
                    creds(updateUser(data));
                })
            },
            
            fbLogin: function(){
                return auth.authWithOAuthPopup("facebook", function(error, authData) {
                if (error) {
                    console.log("Login Failed!", error);
                } else {
                    $state.go('dashboard');
                    console.log("Authenticated successfully");
                }
                })
//                , {remember: "sessionOnly"}
            },
            
            tLogin: function(){
                return auth.authWithOAuthPopup("twitter", function(error, authData){
                    if (error){
                        console.log("Login Failed!", error);
                    } else {
                        $state.go('dashboard');
                        console.log("Authenticated successfully")
                    }
                })
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
    
    function updateUser(authdUser){
//        console.log(authdUser.provider)
        if(authdUser === null){
            return null;
        } else if (authdUser.provider === "facebook"){
        //way to set facebookID as a child of users in fb object
        var user = auth.child(authdUser.facebook.id); 
        var fbCach = authdUser.facebook.cachedUserProfile;
        // sending this info to firebase updating user info
        user.update({
            uid: authdUser.facebook.id,
//            fb: authdUser.facebook,
            name: fbCach.first_name,
            photo: fbCach.picture.data.url
        });
        
        user = $firebaseObject(
            auth.child(authdUser.facebook.id)
        );
        return user;
            
        } else if (authdUser.provider === "twitter") {
        var user = auth.child(authdUser.twitter.id);
        var twCach = authdUser.twitter.cachedUserProfile;    
        // gather twitter info    
        user.update({
//            tw: authdUser.twitter,
            uid: authdUser.twitter.id,
            name: twCach.name,
            photo: twCach.profile_image_url
        });
        
        // update this info in firebase
        user = $firebaseObject(
        auth.child(authdUser.twitter.id)
        );
        return user;
        } // end else if
        
    } //end updateUser
    
}) //end auth factory

; // end of config
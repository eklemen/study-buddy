'use strict';

angular.module('studyBuddy')
    .controller('MainController', function($firebaseArray, $firebaseObject, Auth){
        var self = this;
        var userInfo = new Firebase('https://study-buddy.firebaseio.com/users');
        this.obj = $firebaseArray(userInfo);
        this.userArray = {};
        
    this.fbLogin = Auth.fbLogin;
    
    Auth.onAuth(function(user){
        self.user = user;
        if(user === null){
            console.log('null');
        } else {
            console.log(user);
        }
    });
    
    
})
; //end of MainController
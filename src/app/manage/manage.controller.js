'use strict';

angular.module('studyBuddy')
    .controller('ManageController', function($firebaseObject, $firebaseArray, Auth){
    var self = this;
    Auth.onAuth(function(user, authdUser){
        self.user = user;
    });
    Auth.loggedIn();
    
    var myRef = new Firebase('https://study-buddy.firebaseio.com/groups/' + self.user.$id);
    this.obj = $firebaseObject(myRef);
    this.arr = $firebaseArray(myRef);

    this.update = {};
    this.edit = function(info){
        myRef.update(info);
        return this.update = {};
    };
    this.delete = function(group){
        myRef.remove(group);
    }
})
; //end controller
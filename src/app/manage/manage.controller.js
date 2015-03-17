'use strict';

angular.module('studyBuddy')
    .controller('ManageController', function($firebaseObject, Auth){
    var self = this;
    Auth.onAuth(function(user, authdUser){
        self.user = user;
    });
    
    var myRef = new Firebase('https://study-buddy.firebaseio.com/groups/' + self.user.$id);
    this.arr = $firebaseObject(myRef);
    
    this.edit = function(info){
        myRef.update(info);
    }
})
; //end controller
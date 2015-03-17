'use strict';

angular.module('studyBuddy')
    .controller('ManageController', function($firebaseArray, Auth){
    var self = this;
    Auth.onAuth(function(user, authdUser){
        self.user = user;
    });
    
    var myRef = new Firebase('https://study-buddy.firebaseio.com/groups/' + self.user.$id);
    this.arr = $firebaseArray(myRef);
    
})
; //end controller
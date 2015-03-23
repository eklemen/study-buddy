'use strict';
angular.module('studyBuddy')
    .controller("ListController", function($firebaseObject, $firebaseArray, Auth){
    Auth.loggedIn();
    var self = this;
    Auth.onAuth(function(user, authdUser){
        self.user = user;
    });
    var ref = new Firebase('https://study-buddy.firebaseio.com/groups/');
    var myRef = new Firebase('https://study-buddy.firebaseio.com/groups/' + self.user.$id);
    this.arr = $firebaseArray(ref);
    this.libLocation = function(area){
        if(area == "A"){
            return "assets/images/lib.png"
        }
    }
    
    console.log('banana');
    
})
;
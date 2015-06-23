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

    // Checks if there is additional detail for that group
    this.hasDetail = function(detail){
        if (detail === undefined || detail.length === 0){
            return false;
        } else {
            return true;
        }
    }

    this.libLocation = function(area){
        if(area == "A"){
            return "assets/images/lib.png"
        }
    }
    
    console.log('banana');
    
})
;
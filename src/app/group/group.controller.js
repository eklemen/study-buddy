'use strict';

angular.module('studyBuddy')
    .controller('GroupCtrl', function($firebaseObject, $firebaseArray, Auth, $state){
    var self = this;
    Auth.onAuth(function(user, authdUser){
        self.user = user;
    });
    Auth.loggedIn();
    
    var ref = new Firebase('https://study-buddy.firebaseio.com/groups/' + self.user.$id);    
    
        this.newGroup = {
        };
        
    this.groupA = ["1", "2", "3"];
    this.groupB = ["1", "2", "3", "4"];
    this.mySection = function(sec) {
        if(sec == "A" || sec == "D"){
            return self.groupA;
        } else if(sec == "B" || sec == "C"){
            return self.groupB;
        } else {
            return "";
        }
    }

    this.addGroup = function(group){
        ref.update(group);
        $state.go('manage');
    };
        
    })
;
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
        if(sec == "A"){
            return self.groupA;
        } else {
            return self.groupB;
        }
    }

    this.addGroup = function(group){
        ref.update(group);
        $state.go('list');
    };
        
    })
;
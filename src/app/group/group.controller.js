'use strict';

angular.module('studyBuddy')
    .controller('GroupCtrl', function($firebaseObject, $firebaseArray, Auth){
    var self = this;
    Auth.onAuth(function(user, authdUser){
        self.user = user;
    });
    Auth.loggedIn();
    
    var ref = new Firebase('https://study-buddy.firebaseio.com/groups/' + self.user.$id);    
    
        this.newGroup = {
        };

    this.addGroup = function(group){
        ref.update(group);
        return this.newGroup = {
            subject: '',
            class: '',
            section: ''
        };
    };
        
    })
;
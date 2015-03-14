'use strict';

angular.module('studyBuddy')
    .controller('GroupCtrl', function($firebaseObject, $firebaseArray, Auth){
    this.logout = Auth.logout;
    var self = this;
    Auth.onAuth(function(user){
        self.user = user;
    });
    console.log(self);
    var ref = new Firebase('https://study-buddy.firebaseio.com/users/' + self.user.$id);
    self.obj = $firebaseObject(ref); 
        
        self.newGroup = {
            subject: '',
            class: '',
            section: ''
        };
        console.log(self.obj);
        this.addGroup = function(group){
            self.obj.update(group);
            return self.newGroup = {
                subject: '',
                class: '',
                section: ''
            };
        };
        
        
    })
;

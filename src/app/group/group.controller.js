'use strict';

angular.module('studyBuddy')
    .controller('GroupCtrl', function($firebaseObject, $firebaseArray, Auth){
    this.logout = Auth.logout;
    var self = this;
    Auth.onAuth(function(user){
        self.user = user;
    });
    console.log(self);
    var ref = new Firebase('https://study-buddy.firebaseio.com/users' + self.user.$id + '/group');
    this.obj = $firebaseObject(ref); 
        
        this.newGroup = {
            subject: '',
            class: '',
            section: ''
        };
        
        this.addGroup = function(group){
            self.obj.$add(group);
            return this.newGroup = {
                subject: '',
                class: '',
                section: ''
            };
        }; 
        
        
    })
;

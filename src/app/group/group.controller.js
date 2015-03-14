'use strict';

angular.module('studyBuddy')
    .controller('GroupCtrl', function($firebaseObject, $firebaseArray, Auth){
    
    this.logout = Auth.logout;
    var self = this;
    Auth.onAuth(function(user, authdUser){
        self.user = user;
        console.log(self.authdUser);
    });

    var ref = new Firebase('https://study-buddy.firebaseio.com/groups/');
    this.obj = $firebaseArray(ref); 
        
    this.newGroup = {
            subject: '',
            class: '',
            section: ''
        };

        this.addGroup = function(group){
            this.obj.$add(group);
            return this.newGroup = {
                subject: '',
                class: '',
                section: ''
            };
        };
//        this.obj = $firebaseObject(ref);
        console.log(this.obj);
        
    })
;
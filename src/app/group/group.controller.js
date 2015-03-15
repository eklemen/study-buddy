'use strict';

angular.module('studyBuddy')
    .controller('GroupCtrl', function($firebaseObject, $firebaseArray, Auth){
    var self = this;
    Auth.onAuth(function(user, authdUser){
        self.user = user;
    });

    var ref = new Firebase('https://study-buddy.firebaseio.com/groups/');
    this.obj = $firebaseArray(ref); 
        
    this.newGroup = {
            subject: '',
            class: '',
            section: '',
            creator: self.user.$id
        };

        this.addGroup = function(group){
            this.obj.$add(group);
            return this.newGroup = {
                subject: '',
                class: '',
                section: ''
            };
        };
        console.log(this.obj);
        
    })
;
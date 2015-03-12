'use strict';

angular.module('studyBuddy')
    .controller('GroupCtrl', function($firebaseObject, $firebaseArray){
        var ref = new Firebase('https://study-buddy.firebaseio.com/groups');
        this.obj = $firebaseArray(ref);
        console.log("banana");
        this.groupsObject = {};
        
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
        
        
    })
;

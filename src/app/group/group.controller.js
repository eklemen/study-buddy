'use strict';

angular.module('studyBuddy')
    .controller('GroupCtrl', ["$firebaseArray", function($firebaseArray){
        var ref = new Firebase('https://study-buddy.firebaseio.com/');
        
        this.groupList = [];
        
        this.newGroup = {
            subject: '',
            class: ''
        };
        
        this.addGroup = function(newGroup){
            ref.push(this.newGroup);
            console.log(this.newGroup);
        };
        
        
    }])
;

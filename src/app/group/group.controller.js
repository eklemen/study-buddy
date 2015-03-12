'use strict';

angular.module('studyBuddy')
    .controller('GroupCtrl', function($firebaseObject, $firebaseArray, groupFactory){
//        var ref = new Firebase('https://study-buddy.firebaseio.com/groups');
//        this.obj = $firebaseArray(groupFactory.ref);
        console.log("banana");
        console.log(groupFactory.myData);
        this.obj = groupFactory.obj;
        this.addGroup = groupFactory.addgroup;
//        this.groupsObject = {};
        
//        this.newGroup = {
//            subject: '',
//            class: '',
//            section: ''
//        };
        
//        this.addGroup = function(group){
//            groupFactory.obj.$add(group);
//            return groupFactory.newgroup = {
//                subject: '',
//            class: '',
//            section: ''
//            };
//        };
        
    }) //controller
    
    .factory('groupFactory', function($firebaseObject, $firebaseArray){
        var ref = new Firebase('https://study-buddy.firebaseio.com/groups');
        var obj = $firebaseArray(ref);
        var groupsObject = {};
        var newGroup = {
            subject: '',
            class: '',
            section: ''
        };
        var addGroup = function(group){
            obj.$add(group);
            return newGroup = {
                subject: '',
                class: '',
                section: ''
            }
        };
    
        return {
            ref: ref,
            obj: obj,
            groupsobject: groupsObject,
            newgroup: newGroup,
            addgroup: addGroup,
            myData: "nut-bread"
        }
})

;

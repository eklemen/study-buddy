'use strict';

angular.module('studyBuddy')
    .controller('GroupCtrl', function($firebaseObject, $firebaseArray, Auth){
//    this.login = Auth.fbLogin;
    this.logout = Auth.logout;
    var self = this;
    Auth.onAuth(function(user){
        self.user = user;
        
    });
//    var myGroup = self.user.child('groupInfo');
//    console.log(myGroup);
    var ref = new Firebase('https://study-buddy.firebaseio.com/users/' + self.user.$id);
    var ref2 = $firebaseObject(new Firebase('https://study-buddy.firebaseio.com/users/' + self.user.$id))
    ref2.$loaded()
    .then(function(data){
        self.name = data.name
    })
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
    this.obj = $firebaseObject(ref);
    console.log(this.obj);
        
    })
;

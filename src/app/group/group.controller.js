'use strict';

angular.module('studyBuddy')
  .controller('GroupCtrl', function(){
    var ref = new Firebase("https://study-buddy.firebaseio.com/groups");
    this.group = [{test: "data"}];
    ref.push(this.group);
    console.log(ref);
  });

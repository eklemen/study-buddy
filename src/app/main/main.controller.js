'use strict';

angular.module('studyBuddy')
  .controller('MainCtrl', function(){
    var ref = new Firebase("https://study-buddy.firebaseio.com/");
    var sync = $firebase(ref);
    console.log(sync);
  });

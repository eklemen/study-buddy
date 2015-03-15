angular.module('studyBuddy')
    .controller("ListController", function($firebaseObject, $firebaseArray, Auth){
    var self = this;
    Auth.onAuth(function(user, authdUser){
        self.user = user;
    });
    var ref = new Firebase('https://study-buddy.firebaseio.com/groups/');
    this.obj = $firebaseArray(ref);
    
    var list = {};
    ref.on("value", function(snap) {
        list = snap.val();
        console.log(snap.val());
    })
    console.log(list);
    
})
;
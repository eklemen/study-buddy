angular.module('studyBuddy')
    .controller("ListController", function($firebaseObject, $firebaseArray, Auth){
    var self = this;
    Auth.onAuth(function(user, authdUser){
        self.user = user;
    });
    var ref = new Firebase('https://study-buddy.firebaseio.com/groups/');
    var childs = ref.child('users').child(self.user.$id)
    this.obj = $firebaseObject(childs);
    console.log(this.obj));
    
})
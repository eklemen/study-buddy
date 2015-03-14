angular.module('studyBuddy')
    .controller("ListController", function($firebaseObject, $firebaseArray, Auth){
    var self = this;
    Auth.onAuth(function(user, authdUser){
        self.user = user;
        console.log(self.authdUser);
    });
    var ref = new Firebase('https://study-buddy.firebaseio.com/users/' + self.user.$id);
    this.obj = $firebaseArray(ref);
    
})
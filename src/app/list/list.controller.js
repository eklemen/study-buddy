angular.module('studyBuddy')
    .controller("ListController", function($firebaseObject, $firebaseArray, Auth){
    var self = this;
    Auth.onAuth(function(user, authdUser){
        self.user = user;
    });
    console.log(self.user);
    var ref = new Firebase('https://study-buddy.firebaseio.com/groups/');
    var myRef = new Firebase('https://study-buddy.firebaseio.com/groups/' + self.user.$id);
    this.obj = $firebaseObject(myRef);
    
    // delete function
    this.delete = function(group){
        myRef.remove(group);
    }
    

//    ref.on("value", function(snap) {
//            return snap;
//        })
//    this.obj.$loaded().then(function(data){
//        self.results = data;
//    })
    console.log(this.obj);
//    ref.on("value", function(snap) {
//        list.push(snap.val());
//        console.log(snap.val());
//    })
    
})
;

//auth != null && auth.$user_id == $user_id"
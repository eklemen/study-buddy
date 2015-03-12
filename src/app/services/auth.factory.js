angular.module('studyBuddy')
    .factory('authFactory', function(){
        var ref = new Firebase("https://<your-firebase>.firebaseio.com");
ref.authWithOAuthPopup("facebook", function(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
  } else {
    console.log("Authenticated successfully with payload:", authData);
  }
});
})
;
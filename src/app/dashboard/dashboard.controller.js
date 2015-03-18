'use strict';

angular.module('studyBuddy')
    .controller('DashboardController', function(Auth){
    var self = this;
    Auth.onAuth(function(user, authdUser){
        self.user = user;
    });
    Auth.loggedIn();
    
})
;
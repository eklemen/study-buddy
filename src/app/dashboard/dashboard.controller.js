'use strict';

angular.module('studyBuddy')
    .controller('DashboardController', function(Auth){
    this.logout = Auth.logout;
    this.loggedIn = Auth.loggedIn;
})
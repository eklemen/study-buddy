'use strict';

angular.module('studyBuddy')
  .controller('NavbarController', function (Auth) {
    this.loggedIn = Auth.loggedIn;
    this.logout = Auth.logout;
  })
;
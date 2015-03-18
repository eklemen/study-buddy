'use strict';

angular.module('studyBuddy')
  .controller('NavbarController', function (Auth) {
    this.logout = Auth.logout;
  })
;
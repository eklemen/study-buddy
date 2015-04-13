'use strict';

describe('controllers', function(){
  var scope;

  beforeEach(module('studyBuddy'));

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should tell me things about MainController', inject(function($controller, Auth) {
//    expect(scope.awesomeThings).toBeUndefined();
      
    $controller('MainController', {
        
      $scope: scope
//        var self = this;
//        expect(scope.obj.length > 1).toBeTruthy();
    });
      expect(1<3).toBeTruthy();
      expect(Auth.fbLogin).toBeTruthy();
//    expect(angular.isArray(scope.awesomeThings)).toBeTruthy();
//    expect(scope.awesomeThings.length > 5).toBeTruthy();
  }));
});

describe('Auth', function () {
  // Load your module.
  beforeEach(module('studyBuddy'));

  // Setup the mock service in an anonymous module.
//  beforeEach(module(function ($provide) {
////    $provide.value('oneOfMyOtherServicesStub', {
//    });
//  }));

  it('can get an instance of my factory', inject(function(Auth) {
    expect(Auth).toBeDefined();
    expect(Auth.fbLogin).toBeDefined(); 
    dump(Auth.onAuth);
    console.log(Auth.onAuth);
  }));
});

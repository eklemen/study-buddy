'use strict';

angular.module('studyBuddy')
  .controller('GroupCtrl', function($firebase){
    var ref = new Firebase("https://study-buddy.firebaseio.com/");
    var sync = $firebase(ref);
    this.groupList = {};
    this.newGroup = {
        sub: '',
        cl: ''
    };
    this.addGroup = function(newSubject, newClass){
        sync.$push({sub: this.newSubject,
                 cl: this.newClass});
        this.newSubject = "";
        this.newClass = "";
    };
    this.newGroup = sync.$asArray();
    
  });

//var ref = new Firebase('https://taskfire.firebaseio.com/tasklist');	
//			var sync = $firebase(ref);	
//			this.todoItems = {};
//			this.addItem = function(newTodoItem){
//				sync.$push({task: this.newTodoItem, completed: false});	
//				this.newTodoItem = "";
//					
//			};	
//			this.todoItems = sync.$asObject();	
//		})


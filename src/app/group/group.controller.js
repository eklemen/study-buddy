'use strict';

angular.module('studyBuddy')
  .controller('GroupCtrl', function(){
    var ref = new Firebase("https://study-buddy.firebaseio.com/");
    this.groupList = {};
    this.addGroup = function(newSubject, newClass){
        ref.push({subject: "a new Subject"});
        this.newSubject = "";
    };
    
    
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


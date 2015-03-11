'use strict';

angular.module('studyBuddy')
  .controller('GroupCtrl', function($firebase){
    var ref = new Firebase("https://study-buddy.firebaseio.com/");
    
    
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


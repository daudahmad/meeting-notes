'use strict';

/* Controllers */

var meetingnotesControllers = angular.module('meetingnotesControllers', []);

meetingnotesControllers.controller('MainCtrl', ['$scope', 'notes', function ($scope, notes) {
//meetingnotesControllers.controller('MainCtrl', ['$scope', function ($scope) {
	$scope.notes = notes.notes;
	//if( notes.notes)
	/*$scope.notes = [
    	{title: 'Note 1', noteText: '1. Complete task 1\n2. Complete task 2'}
  	];
  	notes.notes = $scope.notes;*/
	/*$scope.notes = [
    	{title: 'note 1', text: 'note 1 had this to say'}
  	];*/

	$scope.addNote = function(){
		if( !$scope.title || $scope.notes.title === '' 
				|| !$scope.noteText || $scope.notes.noteText === '' ) { 
			alert('Title or description cannot be empty'); 
			return; 
		}
  		// $scope.notes.push({title: $scope.title, noteText: 'This note has large text'});

  		/*$scope.notes.push({
			title: $scope.title,
		    noteText: $scope.noteText
		});
		notes.notes = $scope.notes;*/
		notes.createNote({
			title: $scope.title,
		    noteText: $scope.noteText
		});
		$scope.title = '';
		$scope.noteText = '';
	};  
}]);

meetingnotesControllers.controller('NotesCtrl', ['$scope', '$stateParams', 'notes', function ($scope, $stateParams, notes) {
	// $scope.notes = notes.notes;
	$scope.note = notes.notes[$stateParams.id];
}]);
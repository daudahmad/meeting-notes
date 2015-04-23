'use strict';

/* App Module */

var meetingnotesApp = angular.module('meetingNotes', [
	'meetingnotesServices',
	'meetingnotesControllers',
	'ui.router'
]);

meetingnotesApp.config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		$stateProvider
    		.state('home', {
      			url: '/home',
      			templateUrl: '/partials/home.html',
      			controller: 'MainCtrl',
      			resolve: {
					notePromise: ['notes', function(notes){
				      	return notes.getAll();
				    }]
				}
    		})
    		.state('notes', {
			  url: '/notes/{id}',
			  templateUrl: '/partials/notes.html',
			  controller: 'NotesCtrl'
			});
		
		$urlRouterProvider.otherwise('home');
}]);
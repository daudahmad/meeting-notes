'use strict';

/* Services */

var meetingnotesServices = angular.module('meetingnotesServices', []);

meetingnotesServices.factory('notes', ['$http', function($http){
	var o = {
	    notes: []
	};
	o.getAll = function() {
		return $http.get('/notes').success(function(data){
	      	angular.copy(data, o.notes);
	    });
	};
	o.createNote = function(note) {
  		return $http.post('/notes', note).success(function(data){
    		o.notes.push(data);
  		});
	};
	return o;
}]);
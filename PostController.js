'use strict';

angular.module('app').controller('PostCtrl', function(messages) {
	var self = this;
	self.newMessage = 'Hello World!';

	self.addMessage = function(message) {
		messages.add(message);
		self.newMessage = '';
	};
});
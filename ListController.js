'use strict';

angular.module('app').controller('ListCtrl', function(messages) {
	var self = this;

	self.messages = messages.list;
});
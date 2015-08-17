'use strict';

module.exports = function(context, payload, done) {
	payload.action = 'rerun';
	
	context.service.create('builds', payload, {}, function(error, response) {
		done();
	});
};
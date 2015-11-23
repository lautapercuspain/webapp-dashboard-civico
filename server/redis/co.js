'use strict';

module.exports = function(redis, config, ss){

	var co = redis.createClient(config["port"], config["host"]); // ip, host

	if (config["auth"]) 
		co.auth(config["auth"]);

	co.subscribe("co");

	co.on('message', function (channel, message){
		if (message){
			ss.api.publish.all("co", message);
		} else {
			ss.api.publish.all("co", 0); 
		}
	});
}
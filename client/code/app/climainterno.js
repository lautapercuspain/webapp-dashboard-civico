'use strict';

ss.event.on('climainterno', function(message) {

    var clima_interno = Math.round(message);

	var html = ss.tmpl['widgets-climaInterno'].render({
    	clima: clima_interno
	});
	return $("#climaInterno").html(html);
});
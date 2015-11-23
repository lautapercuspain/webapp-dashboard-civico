'use strict';

ss.event.on('co', function(message){
  var html = ss.tmpl['widgets-co'].render({
  	co: message
  });
  $("#calidadAire").html(html);  
})
var config = require('../../config.js')['redis'];
var client = require('redis').createClient(config["port"], config["host"]);

if (config["auth"]) 
  client.auth(config["auth"]);

exports.actions = function(req, res, ss) {
  return {
    getCo : function(){
      client.hgetall('co', function(err, object) {
        ss.publish.all('co', object["co"])
      });      
    }
  }
}
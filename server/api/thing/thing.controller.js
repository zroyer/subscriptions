'use strict';

var _ = require('lodash');
var http = require("http");

var options = {
  "method": "GET",
  "hostname": "api.cratejoy.com",
  "port": null,
  "path": "/v1/subscriptions/",
  "headers": {
    "authorization": "Basic YXBpdGVzdDphcGl0ZXN0"
  }
};

exports.index = function(req, res){
  options.path = '/v1/subscriptions/';
  var callback = function(response) {
    var body = '';
    response.on('data', function(chunk) {
      body += chunk;
    });
    response.on('end', function() {
      body = JSON.parse(body);
      res.json(body);
      console.log("got the body");
      console.log(body);

    });
  };
  var request = http.request(options, callback);
  request.end();
};
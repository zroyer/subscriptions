'use strict';

var express = require('express');
var controller = require('./thing.controller');

var router = express.Router();

router.get('/', controller.index);


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

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();

module.exports = router;
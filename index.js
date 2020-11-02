"use strict";

const restify = require('restify');
const https = require('https');

function respond(req, res, next) {
	res.send('test');
	next();
  
}

var server = restify.createServer();

server.get('/photos_public', respond);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
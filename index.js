"use strict";

const restify = require('restify');
const corsMiddleware = require('restify-cors-middleware');
const flickr = require('./flickr');

var server = restify.createServer();
const cors = corsMiddleware({});
 
server.pre(cors.preflight);
server.use(cors.actual);
server.get('/photos_public', flickr.getPublicPhoto);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
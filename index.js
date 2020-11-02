"use strict";

const restify = require('restify');
const https = require('https');

function getPublicPhoto(req, res, next) {
	https.get('https://www.flickr.com/services/feeds/photos_public.gne', (resp) => {
	  let data = '';

	  // A chunk of data has been received.
	  resp.on('data', (chunk) => {
	    data += chunk;
	  });

	  // The whole response has been received. Print out the result.
	  resp.on('end', () => {
	    res.send(data);
  		return;
	  });

	}).on("error", (err) => {
	  console.log("Error: " + err.message);
	});
  
}

var server = restify.createServer();
server.get('/photos_public', getPublicPhoto);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
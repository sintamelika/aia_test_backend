const Flickr = require('flickr-sdk');

exports.getPublicPhoto = function(req, res, next) {
	var feeds = new Flickr.Feeds();
  	feeds.publicPhotos({
	  
	}).then(function (data) {
	  res.json(data.body);
	}).catch(function (err) {
	  console.error('bonk', err);
	});
}
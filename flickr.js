const Flickr = require('flickr-sdk');

exports.getPublicPhoto = function(req, res, next) {
	let feeds = new Flickr.Feeds();
  	feeds.publicPhotos({
	  tags: req.query.tags
	}).then(function (data) {
	  res.json(data.body);
	}).catch(function (err) {
	  console.error('bonk', err);
	});
}
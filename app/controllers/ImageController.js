'use strict';

var webshot = require('webshot');
var path = require('path');

module.exports = {

	profile: function(req, res) {

		var profileUrl = req.protocol + '://' + req.get('host') + '/profile-basic';
		var profileImage = __dirname + '/../../public/assets/images/profile.png';

		var options = {
			quality: 100,
			windowSize: {
				width: 1280, 
				height: 1024
			},
			shotSize: {
			    width: 265,
	    		height: 300
	    	}
		}

		webshot(profileUrl, profileImage, options, function(err) {
		  res.sendFile(path.resolve(profileImage));
		});

	}

};
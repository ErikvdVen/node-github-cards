'use strict';

var webshot = require('webshot');
var path = require('path');

module.exports = {

	profile: function(req, res) {

		var profileUrl = 'http://localhost:3000/profile-basic';
		var profileImage = __dirname + '/../../public/assets/images/profile.png';
		var imageUrl = __dirname + '/../../public/assets/images/profile.png';

		var options = {
			quality: 100,
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
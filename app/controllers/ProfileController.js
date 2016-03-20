'use strict';

var githubHelper = require('../helpers/GithubHelper');

module.exports = {

	get: function(req, res) {

		var github = githubHelper.init();

		var data = {
		    user: "erikvdven"
		}

		github.user.get(data, function(err, response) {
			console.log(response);
		    res.render('profile_basic', response);
		});

	}

};
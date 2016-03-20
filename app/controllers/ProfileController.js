'use strict';

var githubHelper = require('../helpers/GithubHelper');
var config = require('config-node')();

module.exports = {

	get: function(req, res) {

		var github = githubHelper.init();

		var data = {
		    user: config.github.user
		}

		github.user.get(data, function(err, response) {
		    res.render('profile_basic', response);
		});

	}

};
'use strict';

var GitHubApi = require("github");

module.exports = {

	init: function(){

		var github = new GitHubApi({
		    // required
		    version: "3.0.0",
		    // optional
		    debug: true,
		    protocol: "https",
		    host: "api.github.com"
		});

		github.authenticate({
		    type: "oauth",
		    token: "15db07106765e5a84d873093d3aa095db6219bee"
		});

		return github;
	}
}
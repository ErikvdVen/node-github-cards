'use strict';

var GitHubApi = require("github");
var config = require('config-node')();

module.exports = {

	init: function(){

		var github = new GitHubApi({
		    // required
		    version: config.github.version,
		    // optional
		    debug: true,
		    protocol: "https",
		    host: config.github.host
		});

		github.authenticate({
		    type: "oauth",
		    token: config.github.oauthToken
		});

		return github;
	}
}
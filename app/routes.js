'use strict';

var router 		= require('express').Router();
var ProfileCtrl = require('./controllers/ProfileController');
var ImageCtrl 	= require('./controllers/ImageController');

module.exports = (function() {
 
    router
    	.get('/profile-basic', ProfileCtrl.get)
    	.get('/images/profile-basic', ImageCtrl.profile);

    return router;
})();
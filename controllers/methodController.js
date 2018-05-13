var express = require("express");
var router = express.Router();

//Import the model (method.js) to use its database functions
var methods = require("../models/method.js");
var users =	require("../models/method.js");
var comments = require("../models/method.js");
var replies =require("../models/method.js");


	//router.get "method of the day"
	//router.get "next method"
	//router.get "user comments"

	//router.post "search route"
	//router.post "single like"
	//router.post "single dislike"

	//router.put "create user comment"
	//router.put "create reply to comment"
	//router.put "all user comments"
	//router.put "all user replies"

	//router.delete "delete comment"
	//router.delete "delete reply"

// Export routes for server.js to use.
module.exports = router;


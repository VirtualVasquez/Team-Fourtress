var express = require("express");
var router = express.Router();

//Import the model (method.js) to use its database functions
var methods = require("../models/method.js");
var users =	require("../models/method.js");
var comments = require("../models/method.js");
var replies =require("../models/method.js");

//methodController
//==============================================
	//router.get "method of the day" (random)
		//Could also be used to random get ANOTHER method, but val must be random
	router.get("/", function(req,res) {
		methods.readOne(function(data) {
			var hbsObject = {
				methods: //math.random???
			};
			console.log(hbsObject);
			res.render("index", hbsObject);
		});
	});
	//router.get "searched method"
	f
	//router.post "single like"
	//router.post "single dislike"
//==============================================


//usersController
//==============================================
	//router.put "all user comments"
	//router.put "all user replies"
//==============================================


//commentsController
//==============================================
	//router.get "all comments under select method"	
	//router.put "create user comment"
	//router.delete "delete comment"
	//router.post "single like"
	//router.post "single dislike"
//==============================================

//repliesController
//==============================================
	//router.put "create reply to comment"
	//router.post "single like"
	//router.post "single dislike"
	//router.delete "delete reply"
//==============================================


// Export routes for server.js to use.
module.exports = router;


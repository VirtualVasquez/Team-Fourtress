var express = require("express");
var router = express.Router();
const connection = require('../config/connection');
const orm = require('../config/orm');
//Import the model (method.js) to use its database functions
var method = require("../models/method");
// var users =	require("../models/method.js");
// var comments = require("../models/method.js");
// var replies =require("../models/method.js");

//methodController
//==============================================
	//router.get "method of the day" (random)
		//Could also be used to random get ANOTHER method, but val must be random
	// router.get("/", function(req,res) {
	// 	res.render('home');
	// });
	router.get('/', (req,res)=>{
		res.render('home');
	})

//API
//==============================================
	router.get("/methods/:request", function(req,res) {
		
		
		
	});


//==============================================

// Export routes for server.js to use.
module.exports = router;


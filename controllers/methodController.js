const connection = require('../config/connection');
const orm = require('../config/orm');
//Import the model (method.js) to use its database functions
// var methods = require("../models/method.js");
// var users =	require("../models/method.js");
// var comments = require("../models/method.js");
// var replies =require("../models/method.js");
module.exports = function(router){
	router.get("/", function(req,res) {
		res.send('main page');
	});
	router.get("/methods/:request", function(req,res) {
		if (req.params.request === 'count') {
				orm.countEntries('methods', (result)=>res.end(JSON.stringify(result)));


		} else{
			res.end("Just testing");
		}
		
	});
	return router;
}
//methodController
//==============================================
	//router.get "method of the day" (random)
		//Could also be used to random get ANOTHER method, but val must be random


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


//API
//==============================================



//==============================================

// // Export routes for server.js to use.
// module.exports = router;


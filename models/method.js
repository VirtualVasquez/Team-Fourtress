var orm = require("../config.orm.js"); //The ORM is being contructed by Mario; pseudocoding for now

//Needs to be one model variable set up for each table that needs to be implemented in this project.

//Methods stored in Database from the scraper
var methods = {
	randomOne: function(cb){
		orm.randomOne("methods", function(res){
		//Randomly select a method on document ready.
		//Also when next button is pressed
		});
	},
	readOne: function(cb){
		orm.readOne("methods", col, val, function(res){
		//return the method and its values that is searched
		})
	},
	update: function(objColVals, condition, cb){
		orm.update("methods", objColVals, status, function(res){
		//should be used for like and dislike column
		//"status" should apply to changing the boolean value	
			cb(res);
		}); 
	},	
};

//Identifcation of individual users
var users = {
	all: function(cb) {
		orm.all("comments", function(res) {
			cb(res);
		});
	},
};

//Comments logged into any given Method
var comments = {
	all: function(PSEUDOCODE){

	}
};

//Replies attached to any comment
var replies = {

};


//Export the database functions of each table for the controller (methodsController.js).

module.exports = methods;
module.exports = users;
module.exports = comments;
module.exports = replies;
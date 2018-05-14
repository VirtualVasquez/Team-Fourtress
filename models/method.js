var orm = require("../config.orm.js"); //The ORM is being contructed by Mario; pseudocoding for now

//Needs to be one model variable set up for each table that needs to be implemented in this project.

//Actions on the Method Table in the Database
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

//Actions on the users table
var users = {
	readOne: function(cb){
		orm.readOne("users", col, val, function(res){
		//return the method and its values that is searched
		})
	},

};

//actions on the comments table
var comments = {
	all: function(PSEUDOCODE){
		//not sure how to format this
		//
	}
};

//actions on the replies table
var replies = {
	all: function(PSEUDOCODE){

	},
};


//Export the database functions of each table for the controller (methodsController.js).

module.exports = methods;
module.exports = users;
module.exports = comments;
module.exports = replies;
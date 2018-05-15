var orm = require("../config.orm.js"); //The ORM is being contructed by Mario; pseudocoding for now

//Needs to be one model variable set up for each table that needs to be implemented in this project.

//Actions on the Method Table in the Database
var methods = {
	//give back all the methods in the database
	all: function(cb) {
		orm.all("methods", function(res) {
			cb(res);
		});
	},
	//give back one method in the database
	readOne: function(cols, vals, cb){
		orm.readOne("methods", cols, vals function(res){
			cb(res);
		});
	},
};

//Actions on the users table
var users = {
	//use to verify login?
	readOne: function(cols, vals, cb){
		orm.readOne("users", cols, vals function(res){
			cb(res);
		});
	},
	create: function(cols, vals, cb) {
    orm.create("users", cols, vals, function(res) {
      cb(res);
    });
  	},
	//use to create a new member login?

};

//actions on the comments table
var comments = {
	//How to narrow it down to JUST those of ONE Method?
	all: function(cb) {
		orm.all("comments", function(res) {
			cb(res);
		});
	},
	//Use when creating a comment on a method
	create: function(cols, vals, cb) {
    orm.create("comments", cols, vals, function(res) {
      cb(res);
    });
  	},
  	update: function(objColVals, statement, cb) {
    orm.update("comments", objColVals, statement, function(res) {
      cb(res);
    });
  	},  	
  	//Do we need this one?
  	readOne: function(cols, vals, cb){
		orm.readOne("comments", cols, vals function(res){
			cb(res);
		});
	},
	//Delete any comment belonging to a user
	delete: function(statement, cb) {
    orm.delete("comments", statement, function(res) {
      cb(res);
    });
  	}
};

//actions on the replies table
var replies = {
	//give back all the replies in the database
	//how to narrow it down to just those under one comment?
	all: function(cb) {
		orm.all("replies", function(res) {
			cb(res);
		});
	},
	//Use when creating a reply on a comment
	create: function(cols, vals, cb) {
    orm.create("replies", cols, vals, function(res) {
      cb(res);
    });
  	},
  	update: function(objColVals, statement, cb) {
    orm.update("replies", objColVals, statement, function(res) {
      cb(res);
    });
  	},  
  	//Delete any replies belonging to a user
  	delete: function(statement, cb) {
    orm.delete("replies", statement, function(res) {
      cb(res);
    });
  	}
};


//Export the database functions of each table for the controller (methodsController.js).

module.exports = {
    methods: methods,
    users: users,
    comments: comments,
    replies: replies,
}
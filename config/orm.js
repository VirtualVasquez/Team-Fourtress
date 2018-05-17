//Import MySQL connection
var connection = require("../config/connection.js");

var orm = {

	//countEntries
	//counts how many entries in the table provided
	//this returns a promise
	//test will check return is a num
	countEntries: (table)=>{
		var queryString = "SELECT COUNT(*) as 'count' FROM ??";
		

		return new Promise ((resolve,reject)=>{
			//notice when using connection pool, connection is a function
			//this function takes a function argument with error and the actual connection
			//use this as reference for all connections to DB for ur function
			//**NOTEL con.release 7 lines down is SUPER IMPORTANT
			//this lets go of the connection and returns it to the pool
			connection((err,con)=>{
				if (err) {
					reject(err);
				}
				con.query(queryString, table, function(err, result) {
				con.release();
				resolve(result);
				});
			})
		});
	},

	//give this the number of entries in our table
	//and it will select and return a random number between 1 and that
	//this should not return a promise

//REDUNDANT(?)vvv==============================================================================
	//MELVIN'S NOTE: 'selectMethodById' does the same thing. We just need to pass
		//Math.random into in the model file when in use.
	selectRandom: (tableInput, col, randomID)=>{ //argument was row previously
	var queryString = "SELECT * FROM ?? WHERE ?? = ? ";
		return new Promise ((resolve,reject)=>{
			function randomID = Math.floor((Math.random() * 365) +1); 
			//randomID set for Method table only, may not be appropriate written in the ORM
			connection((err,con)=>{
				if (err) {
					reject(err);
				}
				con.query(queryString, [tableInput, col, randomID()],
					function(err, result) {
						if (err) throw err;
						console.log(result);
					});
			});
		});
	},
//REDUNDANT(?)^^^==============================================================================

	//give this an id
	//it will return an object
	//test will look for returnedObject.id === idGiven
	//this should return a promise
	//MELVIN'S NOTE: This should work just like selectRandom, but with manual entry of ID
		//ALSO: shouldn't this be able to apply to category selection?
	selectMethodById: (tableInput, col, val)=>{
	var queryString = "SELECT * FROM ?? WHERE ?? = ? ";
		return new Promise ((resolve,reject)=>{	
			connection((err,con)=>{
				if (err) {
					reject(err);
				}
				con.query(queryString, [tableInput, col, val],
					function(err, result) {
						if (err) throw err;
						console.log(result);
					});
			});
		});	
	},

	//selects all methods in the db
	//in an array of objects
	//test will check that array has same amount of elements in the db
	// or result.length === countEntries('methods');
	//this should return a promise
	selectAll: (tableInput, cb)=>{
    var queryString = "SELECT * FROM " + tableInput + ";";
    	return new Promise ((resolve,reject)=>{	
	    	connection.query(queryString, function(err, result) {
	      		if (err) {
	        		throw err;
	      		}
	      		cb(result);
	    	});
	    });					
	},

	//give this the name of a category and it will
	//return an array of objects with all methods under one category
	//test will check for result[0].category === cat(argument)
	//this should return a promise resolves with the full result.

//REDUNDANT(?)vvv==============================================================================
		//MELVIN'S NOTE: This is redundant, selectMethodById does the same thing
	categorySelect: (tableInput, col, val)=>{
		var queryString = "SELECT * FROM ?? WHERE ?? = ? ";
		return new Promise ((resolve,reject)=>{
			connection((err,con)=>{
				if (err) {
					reject(err);
				}
				con.query(queryString, table, function(err, result) {
				con.release();
				resolve(result);
				});
			})
		});
	},
//REDUNDANT(?)^^^==============================================================================

	//this will select a method by its name, that belongs to a category
	//this returns a string of objects.
	//test will check that result[0].name === name(argument);
	//this should return a promise, that resolves with the full result.

		//MELVIN'S NOTE: Why not search by name from the beginning? Fewer steps that way.
			//rework "selectMethodById" -> "select". Will get any val from any column.
				//regardless, code below is written as asked
	selectMethodByNameInCategory: (nameVal, tableInput, col, val)=>{
		var queryString = "SELECT ? FROM ?? WHERE ?? = ? ";
		return new Promise ((resolve,reject)=>{
			connection((err,con)=>{
				if (err) {
					reject(err);
				}
				con.query(queryString, nameVal, tableInput, col, val, 
					function(err, result) {
						con.release();
						resolve(result);
					});
			})
		});		
	},


	//section below should be finetuned once auth complete

	//this gets the value of likes in db for current method
	//test will check result is a number
	//MELVIN'S NOTE: I wrote my version of this, but I think this could be
		//controlled better via handlebars (ORM gets ALL data of ID, Handlebars
		//shows ONLY the stuff we want)
	getLikesForMethod: (likeVal, likeCol, tableInput, col, val)=>{
		var queryString = "SELECT ? OF ?? FROM ?? WHERE ?? = ? ";
		return new Promise ((resolve,reject)=>{
			connection((err,con)=>{
				if (err) {
					reject(err);
				}
				con.query(queryString, likeVal, likeCol, nameVal, tableInput, col, val, 
					function(err, result) {
						con.release();
						resolve(result);
					});
			})
		});		
	},

	//this gets the dislikes for the current method
	//test will check result is a number, and if given an invalid id, like 45678, returns false
	//MELVIN'S NOTE: getLikesForMethod does the same thing, of which is already a redundant function
		//in it of itself. 
	getDislikesForMethod: (dislikeVal, dislikeCol, tableInput, col, val)=>{
		var queryString = "SELECT ? OF ?? FROM ?? WHERE ?? = ? ";
		return new Promise ((resolve,reject)=>{
			connection((err,con)=>{
				if (err) {
					reject(err);
				}
				con.query(queryString, dislikeVal, dislikeCol, nameVal, tableInput, col, val, 
					function(err, result) {
						con.release();
						resolve(result);
					});
			})
		});		
	},

	//adds one to the current value of likes for this method, in the db
	//this should return a promise
	//test for result is number, false if invalid id
	postLikeForMethod: methodId=>{

	},


	//subtracts one from value of likes
	///returns a promise resolves on the result
	// test for result is number, false if invalid id given
	removeLikeForMethod: methodId=>{

	},

	//adds one to  value of dislikes
	///returns a promise resolves on the result
	// test for result is number, false if invalid id given
	postDislikeForMethod: methodId=>{

	},

	//subtracts one from dislikes
	///returns a promise resolves on the result
	// test for result is number, false if invalid id given
	removeDislikeForMethod: methodId=>{

	},

	//***ONCE AUTH COMPLETE--- updatemethods liked/disliked array//


	//get all comments for the method id given
	///returns a promise resolves on the result
	// test for result is an array
	getCommentsForMethod: methodId=>{

	},

	//gets all repplies for a comment Id num
	///returns a promise resolves on the result
	// test for result is an array
	getRepliesForComment: commentId=>{

	},

	//adds a new comment to db, attached to the method id given
	/////returns a promise resolved on query result
	// test for new value of methodId is 1 greater than before
	postCommentOnMethod: methodId=>{

	},

	//once auth complete: remove comment function.

	postReplyOnComment: (commentId,message)=>{

	},

	//once auth complete

	getLikesForComment: commentId=>{

	},

	getDislikesForComment: commentId=>{

	},

	postLikeForComment: commentId=>{

	},

	postDislikeForComment: commentId=>{

	},

	removeLikeForComment: commentId=>{

	},

	removeDislikeForComment: commentId=>{
		
	},

	//definitely after auth
	// getAllCommentsByUser: userId=>{

	// }





	
};



//Export the orm object for the model (method.js)
module.exports = orm;
//Import MySQL connection
var connection = require("../config/connection.js");

var orm = {

	//countEntries
	//counts how many entries in the table provided
	//this returns a promise
	//test will check return is a num
	countEntries: (table)=>{
		var queryString = "SELECT COUNT(*) as 'count' FROM ??;";
		

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
	selectRandom: (rows)=>{
		return Math.floor(Math.random() * (rows+1));
	},

	//give this an id
	//it will return an object
	//test will look for returnedObject.id === idGiven
	//this should return a promise
	selectMethodById: (methodId)=>{

	},

	//selects all methods in the db
	//in an array of objects
	//test will check that array has same amount of elements in the db
	// or result.length === countEntries('methods');
	//this should return a promise
	selectAll: ()=>{

	},

	//give this the name of a category and it will
	//return an array of objects with all methods under one category
	//test will check for result[0].category === cat(argument)
	//this should return a promise resolves with the full result.
	categorySelect: cat=>{

	},

	//this will select a method by its name, that belongs to a category
	//this returns a string of objects.
	//test will check that result[0].name === name(argument);
	//this should return a promise, that resolves with the full result.
	selectMethodByNameInCategory: (cat,name)=>{

	},


	//section below should be finetuned once auth complete

	//this gets the value of likes in db for current method
	//test will check result is a number
	getLikesForMethod: methodId=>{

	},

	//this gets the dislikes for the current method
	//test will check result is a number, and if given an invalid id, like 45678, returns false
	getDislikesForMethod: methodId=>{

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
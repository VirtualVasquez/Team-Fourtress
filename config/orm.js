//Import MySQL connection
var connection = requiire ("../config/connection.js");
//================================================================================
//insert helper function for SQL syntax from CatsApp if failure to configure ORM
// function printQuestionMarks(num) {
//   var arr = [];

//   for (var i = 0; i < num; i++) {
//     arr.push("?");
//   }

//   return arr.toString();
// }

// // Helper function to convert object key/value pairs to SQL syntax
// function objToSql(ob) {
//   var arr = [];

//   // loop through the keys and push the key/value as a string int arr
//   for (var key in ob) {
//     var value = ob[key];
//     // check to skip hidden properties
//     if (Object.hasOwnProperty.call(ob, key)) {
//       // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
//       if (typeof value === "string" && value.indexOf(" ") >= 0) {
//         value = "'" + value + "'";
//       }
//       // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
//       // e.g. {sleepy: true} => ["sleepy=true"]
//       arr.push(key + "=" + value);
//     }
//   }

//   // translate array of strings to a single comma-separated string
//   return arr.toString();
// }
//================================================================================
//Object for all our SQL statement functions. Can apply to each table
var orm = {
	//can be used for methods, comments, and replies as necessary
	all: function(tableInput, cb) {
		var queryString = "SELECT * FROM " + tableInput + ";";
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		})
	},
	//readOne can be used as "get Random" if `vals` is randomly selected
	readOne: function(table, cols, vals, cb){
		var queryString = "SELECT FROM " + table;

		queryString += " (";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString += vals.length;
		queryString += ") ";

		console.log(queryString);

		connection.query(queryString, vals, function(err, result) {
			if (err) {
				throw.err;
			}
			cb(result);
		});
	},
	//this should end up getting used for comments, replies, and new users
	create: function(table, cols, vals, cb){
		var queryString = "INSERT INTO " + table;

    	queryString += " (";
    	queryString += cols.toString();
    	queryString += ") ";
    	queryString += "VALUES (";
    	queryString += vals.length;//printQuestionMarks(vals.length)
    	queryString += ") ";

    	console.log(queryString);

    	connection.query(queryString, vals, function(err, result) {
    		if (err) {
    			throw err;
    		}

    		cb(result);
    	});		
	},

	//used to update boolean values (like/dislike) or user comments/replies
	//`condition` might not be the right term/argument to use
	update: function(table, objColVals, statement, cb) {
		var queryString = "UPDATE " + table;

		queryString += " SET ";
		queryString += objColVals; //might need CatsApp, rewrite as ```objToSql(objColVals)```
		queryString += " WHERE ";
		queryString += statement;

		console.log(queryString);
		conection.query(queryString, function(err, result){
			if (err) {
				throw err;
			}

			cb(result);
		});
	},
	//delete a comment or reply, being passed through as the argument `statement`
	//probably a better way to write that?
	delete: function(table, statement, cb){
		var queryString = "DELETE FROM " +  table;
		queryString += " WHERE ";
		queryString += statement;

		connection.query(queryString, function (err, result) {
			if (err) {
				throw err;
			}

			cb(result);
		});

	},
};



//Export the orm object for the model (method.js)
module.exports = orm;
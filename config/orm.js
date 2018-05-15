//Mario is going to attempt writing his own ORM

//Import MySQL connection
var connection = requiire ("../config/connection.js");

//insert helper function for SQL syntax from CatsApp if failure to configure ORM

//Helper function to vonert object key/value pairs to SQL syntax from CatsApp if necessary

//Object for all our SQL statement functions. Can apply to each table
var orm = {
	all: function(tableInput, cb) {
		var queryString = "SELECT * FROM " + tableInput + ";";
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		})
	},
	randomOne: function(table, cols, vals, cb){
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
	readOne: function(){

	},
	create: function(){

	},
	update: function(){

	},
	delete: function(){

	},
};



//Export the orm object for the model (method.js)
module.exports = orm;
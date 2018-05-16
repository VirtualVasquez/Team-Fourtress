// // this is my branch
var express = require("express");
var bodyParser = require("body-parser");

const connection = require('./config/connection');
const orm = require('./config/orm');
var PORT = process.env.PORT || 8080;

var app = express();
var path = require("path");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());


// // Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Start our server so that it can begin listening to client requests.
// var app = require("./controllers/methodController.js")(app);
app.get("/", function(req,res) {
		res.send('main page');
	});
	app.get("/methods/:request", function(req,res) {
		if (req.params.request === 'count') {
				orm.countEntries('methods', (result)=>res.end(JSON.stringify(result)));


		} else{
			res.end("Just testing");
		}
		
	});
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});

module.exports = app;


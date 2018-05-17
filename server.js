// // this is my branch
const express = require("express");
var bodyParser = require("body-parser");
var routes = require("./controllers/mainController");
const authRoutes = require("./controllers/auth-routes");
const passportSetup = require('./config/passport-setup');

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


//pulls our routes in to express;
app.use(routes);
app.use('/auth', authRoutes);


// app.get('/', (req,res)=>{
//     res.render();
// });



// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});


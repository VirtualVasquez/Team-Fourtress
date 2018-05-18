var express = require("express");
var router = express.Router();

const db = require('../models')

	//get a random
	router.get('/', (req,res)=>{

		db.method.findAll().then(result=>{
			//select a random one from the result and send
			console.log(result[Math.floor((Math.random() * (result.length + 1)))]);
			res.render('method', result[Math.floor((Math.random() * (result.length + 1)))]);
		})
		.catch(e=>{
			if(e) throw e;
		});

	});

	router.get('/search/:cat/:name', (req,res)=>{

		db.method.findAll().then(result=>{
			//select a random one from the result and send
			console.log(result[Math.floor((Math.random() * (result.length + 1)))]);
			res.render('method', result[Math.floor((Math.random() * (result.length + 1)))]);
		})
		.catch(e=>{
			if(e) throw e;
		});

	});

//API
//==============================================
	router.get("/methods/:request", function(req,res) {
		
		
		
	});


//==============================================

// Export routes for server.js to use.
module.exports = router;


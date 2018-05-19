var express = require("express");
var router = express.Router();

var parseDbOutput = (obj)=>{
	console.log(obj);
	try{
		obj.parameters = JSON.parse(obj.parameters);
	} catch(e){
		obj.parameters = [];
	}

	try{
		obj.description = JSON.parse(obj.description);
	}catch(e){
		obj.description = ['Description unavailable'];
	}

	try{
		obj.description2 = JSON.parse(obj.description2);
	}catch(e){
		obj.description2 = [];
	}
	
	try{
		obj.examples = JSON.parse(obj.examples);
	}catch(e){
		obj.examples = ['Example unavailable'];
	}
	
	try{
		obj.tags = JSON.parse(obj.tags);
	}catch(e){
		obj.tags = [];
	}

	return obj;
}

const db = require('../models');

	//get a random
	router.get('/', (req,res)=>{

		db.method.findAll().then(result=>{
			//select a random one from the result and send
			//this is a sequelize response obj
			var selected = result[Math.floor((Math.random() * (result.length + 1)))];
			
			//this is an object of ONLY our DB data
			var cleanOutput = parseDbOutput(selected.dataValues);

			// console.log(selected.dataValues);
			res.render('method', cleanOutput);
		})
		.catch(e=>{
			if(e) throw e;

		});

	});


	router.get('/method/:id', (req,res)=>{

		db.method.findOne({where: {id: req.params.id}}).then(result=>{
			
	
			//this is an object of ONLY our DB data
			var cleanOutput = parseDbOutput(result.dataValues);

			// console.log(selected.dataValues);
			res.render('method', cleanOutput);
		})
		.catch(e=>{
			// res.redirect('/');
			if(e) throw e;

		});

	});


	router.post('/next', (req,res)=>{

		db.method.findAll().then(result=>{
			//select a random one from the result and send
			//this is a sequelize response obj
			var selected = result[Math.floor((Math.random() * (result.length + 1)))];
			
			//this is an object of ONLY our DB data
			var cleanOutput = parseDbOutput(selected.dataValues);

			// console.log(selected.dataValues);
			res.send(cleanOutput);
		})
		.catch(e=>{
			
			if(e) throw e;

		});
		

	});

	router.post('/method/:opinion', (req,res)=>{

		query = {};

		

		if(req.params.opinion === 'dislike'){
			query.dislikes = db.sequelize.literal(`dislikes + 1`);
		} else if (req.params.opinion === 'like'){
			query.likes = db.sequelize.literal(`likes + 1`);
		}

		console.log(req.params.opinion);
		db.method.update(query, 
		{ where: 
			{ id: req.body.id } 
		})
		// 
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


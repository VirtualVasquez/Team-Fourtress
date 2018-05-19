var express = require("express");
var router = express.Router();

var parseDbOutput = (obj)=>{
	obj.parameters = JSON.parse(obj.parameters);
	obj.description = JSON.parse(obj.description);
	obj.description2 = JSON.parse(obj.description2);
	obj.examples = JSON.parse(obj.examples);
	obj.tags = JSON.parse(obj.tags);

	return obj;
}

//gets all categories currently in DB and returns 
var getCategories = ()=>{

	db.method.aggregate('category', 'DISTINCT', { plain: false })
		.then(result=>{
			// console.log(result);
			var thisArray = [];

			result.forEach(element=>{
				thisArray.push(element.DISTINCT);
			});

			return thisArray;
		})
		.catch(e=>{
			if (e) throw e;
		});
}


//get a random method obj
var getRandom = (res)=>{
	db.method.findAll().then(result=>{
			//select a random one from the result and send
			//this is a sequelize response obj
			var selected = result[Math.floor((Math.random() * (result.length + 1)))];
			
			//this is an object of ONLY our DB data
			var cleanOutput = parseDbOutput(selected.dataValues);

			console.log(selected.dataValues);
			res.render('method', cleanOutput);

		})
		.catch(e=>{
			if(e) throw e;
		});
}

const db = require('../models');

	
	

	router.get('/', (req,res)=>{

		//get a random
		getRandom(res);

	});

//API
//==============================================
	router.get("/api/all", function(req,res) {
		db.method.findAll()

		.then(result=>{
			res.json(result);
		})

		.catch(e=>{

		});
	});


	router.get("/api/categories", function(req,res) {
		db.method.aggregate('category', 'DISTINCT', { plain: false })

		.then(result=>{
			var categoryArray = []
			
			result.forEach(cat=>{
				categoryArray.push(cat.DISTINCT);
			});

			res.json(categoryArray);
		})

		.catch(e=>{

		});
	});




//==============================================

// Export routes for server.js to use.
module.exports = router;


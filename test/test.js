var request = require("supertest");

describe("Method Routes", function() {

    it("Responds to '/'", function(done) {
        request(server).get("/").expect(200, done);
    });	
	it("Get All Methods", function(done) {
        request(server).get("/PSEUDOROUTE")
        .set("Accept", "application/json")
        .expect(200, done) // code for this Test SHOULD stop here.
        .expect(PSEUDO2);
        //pseudoroute = "/api/methods/"?
        //PSEUDO2 = if it gets all methods, we'd have to hard code all 365 of them.
    });
    it("Count Entries of table", function(done) {
        request(server).get("/PSEUDOROUTE")
        .set("Accept", "application/json")
        .expect(200)
        .expect("PSUEDO2");
        //PSEUDO2 = what was it, ```{"rows": "365"}```?
    });
    it("Get Method By the first ID", function(done) {
    	//I NEED to see the information in the actual database to ensure
    	//I put in the right info
        request(server).get("/api/methods/1")
        .set("Accept", "application/json")
        .expect(200)
        .expect({"name":"", "url":"", "category":"",
         "description":"", "description2":"", "syntax":"",
          "parameters":"", "returns":"", "examples":"", "tags":"",
          "likes":"","dislikes":"", "id":"",}, done);
    });
    it("Adds a new author and responds with the json for the new author", function(done) {
        request(server).post("/PSEUDOROUTE", {name:"Yamil"})
        .set("Accept", "application/json")
        .expect(200)
        .expect({ name: 'Yamil' }, done);
    });
});

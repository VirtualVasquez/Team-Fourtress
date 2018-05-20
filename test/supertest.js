var request = require("supertest");

describe("Method Routes", function() {

    it("Responds to '/'", function(done) {
        request(server).get("/").expect(200, done);
    });	

    //Not useful in this current iteration.
    
	// it("Get All Methods", function(done) {
 //        request(server).get("/PSEUDOROUTE")
 //        .set("Accept", "application/json")
 //        .expect(200, done);
 //    });
 //    it("Count Entries of table", function(done) {
 //        request(server).get("/PSEUDOROUTE")
 //        .set("Accept", "application/json")
 //        .expect(200)
 //        .expect("PSUEDO2");
 //        //PSEUDO2 = what was it, ```{"rows": "365"}```?
 //    });
 //    it("Get Method By the first ID", function(done) {
 //    	//I NEED to see the information in the actual database to ensure
 //    	//I put in the right info
 //        request(server).get("/api/methods/1")
 //        .set("Accept", "application/json")
 //        .expect(200)
 //        .expect({"name":"", "url":"", "category":"",
 //         "description":"", "description2":"", "syntax":"",
 //          "parameters":"", "returns":"", "examples":"", "tags":"",
 //          "likes":"","dislikes":"", "id":"",}, done);
 //    });
 //    it("Update the like status of the method with the first ID", function(done) {
 //        request(server).update("/api/methods/1", {likes: true})
 //        .set("Accept", "application/json")
 //        .expect(200)
 //        .expect({ likes: true }, done);
 //    });
 //    it("Update the dislike status of the method with the first ID", function(done) {
 //        request(server).update("/api/methods/1", {dislikes: true})
 //        .set("Accept", "application/json")
 //        .expect(200)
 //        .expect({ dislikes: true }, done);
 //    });
});

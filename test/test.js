//Mob coding from 5/12/2018 in class. Using as a reference for later

var express
	request = require("supertest"),
	server = require("../server");
var assert = require("assert");

describe("API Routes", function() {

    it("Responds to '/methods/count'", function(done) {
        request(server)
        .get("/method/count")
        .set("Accept", "application/json")
        .expect(`[{"count":365}]`, done);
    });
    // it("Responds to '/api/authors/'", function(done) {
    //     request(server).get("/api/authors/")
    //     .set("Accept", "application/json")
    //     .expect(200, done);
    // });
    // it("Responds with the first author", function(done) {
    //     request(server).get("/api/authors/1")
    //     .set("Accept", "application/json")
    //     .expect(200)
    //     .expect({"id":1,"name":"Sam","createdAt":"2018-05-12T17:07:22.000Z"}, done);
    // });
    // it("Adds a new author and responds with the json for the new author", function(done) {
    //     request(server).post("/api/authors", {name:"Yamil"})
    //     .set("Accept", "application/json")
    //     .expect(200)
    //     .expect({ name: 'Yamil' }, done);
    // });
});
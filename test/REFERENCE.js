//Mob coding from 5/12/2018 in class. Using as a reference for later
var request = require("supertest");
// var server = require("../server");
// var assert = require("assert");

describe("Author Routes", function() {
    // var server;
    // beforeEach(function(){
    //     server = require("../server");
    // });
    // afterEach(function(){
    //     server.close();
    // });
    it("Responds to '/'", function(done) {
        request(server).get("/").expect(200, done);
    });
    it("Responds to '/api/authors/'", function(done) {
        request(server).get("/api/authors/")
        .set("Accept", "application/json")
        .expect(200, done);
    });
    it("Responds with the first author", function(done) {
        request(server).get("/api/authors/1")
        .set("Accept", "application/json")
        .expect(200)
        .expect({"id":1,"name":"Sam","createdAt":"2018-05-12T17:07:22.000Z"}, done);
    });
    it("Adds a new author and responds with the json for the new author", function(done) {
        request(server).post("/api/authors", {name:"Yamil"})
        .set("Accept", "application/json")
        .expect(200)
        .expect({ name: 'Yamil' }, done);
    });
});
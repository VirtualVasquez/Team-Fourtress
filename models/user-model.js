const orm = require('../config/orm');

const User = function(name, gitHubId){
    this.name = name;
    this.gitHubId = gitHubId;
}

User.prototype.save = function(obj){

}
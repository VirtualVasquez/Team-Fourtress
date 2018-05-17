const orm = require('../config/orm');

const User = function(name, username, githubId, profileUrl, email){
    this.name = name;
    this.githubId = githubId;
    this.username = username;
    this.profileUrl = profileUrl;
    this.email = email
}

User.prototype.save = function(obj){

}

module.exports = User;
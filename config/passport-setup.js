const passport = require('passport');
const GithubStrategy = require('passport-github');
// const User = require('../models/user-model');

require('dotenv').config();

// passport.use(
//     new GithubStrategy({
//         //options for github strat
//         clientID: process.env.GH_ID,
//         clientSecret: process.env.GH_SECRET,
//         callbackURL: process.env.GH_CB
//     }, (accessToken, refreshToken, profile, done)=>{
//         var aUser = new User(profile.displayName, profile.username, profile.id, profile.profileUrl, profile._json.email);
//         console.log(aUser);
//         console.log('passport callback fired');
//     })
// )
const passport = require('passport');
const GithubStrategy = require('passport-github');

passport.use(
    new GithubStrategy({
        //options for github strat
        clientID: process.env.GH_ID,
        clientSecret: process.env.GH_SECRET,
        callbackURL: process.env.GH_CB
    }, (accessToken, refreshToken, profile, done)=>{
        console.log(profile);
        console.log('passport callback fired')
    })
)
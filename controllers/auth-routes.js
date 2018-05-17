const router = require('express').Router();
const passport = require('passport');


//routes

router.get('/login', (req,res) => {
    res.send('login');
});

// auth logout
router.get('/logout', (req,res)=>{
    //handle with passport
    res.send('logging out');
});
// auth with github
router.get('/github', passport.authenticate('github', {scope: ['profile', 'email']}));

router.get('/signin/callback', passport.authenticate('github'), (req,res)=>{
    res.send('reached callback');
})

module.exports = router;
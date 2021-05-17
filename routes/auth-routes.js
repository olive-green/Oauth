const router= require("express").Router();
const passport=require("passport");

//creating login routes
router.get("/login",(req,res)=>{
    res.render("login.ejs");
})

//auth with google
router.get("/google",passport.authenticate("google",{
    scope:["profile"]
}));

// callback route for google to redirect to
router.get("/google/redirect",passport.authenticate("google"),(req,res)=>{  //here before this function fired, passport.authenticate middleware is fired , now this time it doesn't take user to consent screen instead of that it will get user profile data from the query string of redirect URL and immediately fires the callback function of passport.use()
    res.send("You are at redirected page");
})

//creating logout route
router.get("/logout",(req,res)=>{
    req.logout();
    res.redirect("/");
})


module.exports=router;

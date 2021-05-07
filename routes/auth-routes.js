const router= require("express").Router();

//creating login routes
router.get("/login",(req,res)=>{
    res.render("login.ejs");
})

//creating google route
router.get("/google",(req,res)=>{
    res.send("logging in with google");
})

//creating logout route
router.get("/logout",(req,res)=>{
    res.send("logout");
})

module.exports=router;
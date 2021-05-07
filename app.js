const express=require("express");
const passport = require("passport");
//import router
const authRoutes=require("./routes/auth-routes");
const app=express()

//require passport-setup to run google strategy
const passportSetup=require("./config/passport-setup");

// set up view engine
app.set("view engine","ejs");

//routes middleware 
app.use("/auth",authRoutes);

//create home route
app.get("/",(req,res)=>{
    res.render("home");
});


//creating server
const port= process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`server is listening on ${port}`);
});
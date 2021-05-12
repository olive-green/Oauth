const express=require("express");
const passport = require("passport");
const mongoose=require("mongoose");
//import router
const authRoutes=require("./routes/auth-routes");
const app=express()
//import dbURL
const keys=require("./config/keys");
const cookieSession=require("cookie-session");


// set up view engine
app.set("view engine","ejs");

//setting cookies
app.use(cookieSession({
    maxAge:24*60*60*1000,
    keys:[keys.session.key] //import encrypted key from keys
}))

//initialize passport
app.use(passport.initialize());
app.use(passport.session());


//db connection
mongoose.connect(keys.mongodb.dbURL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=> console.log("database connected successfully"))
.catch(err=>console.log(err));


//require passport-setup to run google strategy
const passportSetup=require("./config/passport-setup");


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
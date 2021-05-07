const express=require("express")
//import router
const authRoutes=require("./routes/auth-routes");
const app=express()

// set up view engine
app.set("view engine","ejs");

//routes middleware 
app.use("/outh",authRoutes);

//create home route
app.get("/",(req,res)=>{
    res.render("home");
});


//creating server
const port= process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`server is listening on ${port}`);
});
const passport=require("passport");
const keys=require("./keys");
const GoogleStrategy=require("passport-google-oauth20");
const HttpsProxyAgent = require('https-proxy-agent');
//using a google strategy`
passport.use(new GoogleStrategy({
    //options for google strategy
    callbackURL:"/auth/google/redirect",
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
},(accessToken,refreshToken,profile,done)=>{ //accessToken is a token given by google to us , refreshToken is a token which regenerate the accessToken which gets expired always after some time and done is a function which will run after this callback function is completed 
    //passport callback functions
    console.log("passport callback function fired");
    console.log(profile);
})
)



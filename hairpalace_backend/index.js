const express = require("express");
const mongoose = require("mongoose");
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
require("dotenv").config(); // to hide password
const passport = require("passport");
const User = require("./models/User");
const authRoutes = require("./routes/auth")
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const uri= "mongodb+srv://rahulbhola:"+process.env.MONGO_PASSWORD+"@cluster0.tkl3uhc.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri)
    .then((x)=>{
        console.log("Connected to Mongo!");
    })
    .catch((err)=>{
        console.error("Error while connecting to mongo");
    });



let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'thisKeyIsSupposedToBeSecret'; 

passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({_id: jwt_payload.identifier}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));


app.get("/",(req, res)=>{
    res.send("hello");
})

app.use("/auth",authRoutes);

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`)
})


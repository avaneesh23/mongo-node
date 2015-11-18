var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');
var mongoose = require('mongoose');
var nodemailer = require("nodemailer");

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var cookieParser = require('cookie-parser');
var session = require('express-session');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());   //for parsing application/json

app.use(multer()); // for parsing multipart/form-data

app.use(session({
    secret: process.env.SESSION_SECRET || 'this is the secret',
    resave: false,
    saveUninitialized: false
}));

app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(__dirname + '/public'));

mongoose.connect(process.env.OPENSHIFT_MONGODB_DB_URL || 'mongodb://localhost/wham');

app.get("/", function (req, res) {
    res.sendfile(__dirname + '/public/index.html');
});

var ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;
app.listen(port, ip);

var UserProfileSchema = new mongoose.Schema({
    email: String,
    password: String,
    firstname: String,
    lastname: String
}, { collection: "UserProfile" });

var UserProfileModel = mongoose.model("UserProfileModel", UserProfileSchema);

passport.use('Authentication', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
},
    function (email, password, done) {
        UserProfileModel.findOne({ email: email, password: password }, function (err, user) {
            if (user != null) {
                if (err) {
                    res.send("Error");
                } else {
                    return done(null, user);
                }
            }
        });

    }));

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});

app.post("/login", passport.authenticate('Authentication'), function (req, res) {
    var user = req.user;
    res.json(user);
});

app.post("/register", function (req, res) {

    var newUserAuth = req.body;
    var newUserAuthObject = new UserProfileModel(newUserAuth);

    newUserAuthObject.save(function (err, user) {
        if (err) {
            res.send('error');
        }
        else {
            res.send('ok');
        }
    });

});
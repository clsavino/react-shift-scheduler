var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var passport = require("passport");
var localStrategy= require("passport-local");
var passportLocalMongoose = require("passport-local-mongoose");
var Promise = require("bluebird");
var User = require("./models/user")

mongoose.Promise = Promise;

//Initialize Express
var app = express();
var PORT = process.env.PORT || 7000;

//Express session
app.use(require("express-session")({
	secret: "This is our secret session 2016 for users!",
	resave: false,
	saveUninitialized: false
}));

//Passport
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Body-Parser
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Public files
app.use(express.static("./public"));

//DB
mongoose.connect("mongodb://localhost/scheduler");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

app.use(express.static(__dirname + "/public"))

//Initialize Auth Routes

// app.get("/#/register", function(req, res) {
//   	console.log(req)
// 	console.log(res)
// });
app.get("*", function(req,res) {
	response.sendFile(path.resolve(__dirname, "public", "index.html"))
})

app.post("/register", function(req, res) {
  console.log(req.body.username)
  console.log(req.body.email)
  console.log(req.body.password)
  console.log(req.body.passwordConfirmation)

  User.register(new User({username: req.body.username, email: req.body.email}), req.body.password, function(err, user) {
  	if(err){
  		console.log(err);
  		return res.render("register");
  	}
  	passport.authenticate("local")(req, res, function() {
  		res.redirect("/");
  	});
  })
});




//Port Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
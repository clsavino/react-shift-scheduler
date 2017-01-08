  var express = require("express");
  var bodyParser = require("body-parser");
  var logger = require("morgan");
  var passport = require("passport");
  var LocalStrategy= require("passport-local");
  var passportLocalMongoose = require("passport-local-mongoose");
  var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
  var path = require("path");
  var db = require("./db/db.js")
  var User = require("./models/user")
  var configAuth = require('./app/config/auth');


// Require Employee Schema from Database
  var employee = require("./models/Employee");
  var EmployeeSchedule = require("./models/employeeSchedule");

//Initialize Express
  var app = express();
  var PORT = process.env.PORT || 8080;

//Express session
  app.use(require("express-session")({
    secret: "This is our secret session 2016 for users!",
    resave: false,
    saveUninitialized: false
  }));

//Passport
  app.use(passport.initialize());
  app.use(passport.session());
  passport.use(new LocalStrategy(User.authenticate()));
  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());

//Body-Parser
  app.use(logger("dev"));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.text());
  app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//GOOGLE AUTH

  app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// GET /auth/google/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
  app.get('/auth/google/callback', 
    passport.authenticate('google', { 
      failureRedirect: '/' 
    }),
    function(req, res) {
      res.redirect('/employee');
    });

    passport.use(new GoogleStrategy({
        clientID: configAuth.googleAuth.clientID,
        clientSecret: configAuth.googleAuth.clientSecret,
        callbackURL: configAuth.googleAuth.callbackURL,
      },

      function(accessToken, refreshToken, profile, done) {
        User.findOne({ "username" : profile.displayName, "email" :profile.emails[0].value }, function (err, user) {
          console.log("Current user already stored = " + user)
          if(err) 
            return done(err);

          if(user) {

            return done(null, user);
          } else {

            var newUser = new User();

            newUser.username = profile.displayName;
            newUser.email = profile.emails[0].value
            newUser.userType = "employee";
            console.log("Storing new user to DB")
            console.log(newUser.username)
            console.log(newUser.email)
            console.log(newUser.userType)

            newUser.save(function(err) {
              if (err)
                 throw err;
              return done(null, newUser);
            });
          } 
        });
      }
    ));

//LOCAL AUTH

//Auth Routes
  app.post("/register", function(req, res) {

    User.register(new User({
      username: req.body.username,
      email: req.body.email,
      userType: req.body.userType
    }),

    req.body.password, function(err, user) {
      if(err){
        console.log(err);
        return res.render("register");
      }
      passport.authenticate("local")(req, res, function() {
        res.redirect("/");
      });
    })
  });

  app.post("/login", passport.authenticate("local", {
    // successRedirect: "/manager",
    failureRedirect: "/"
  }), function(req, res) {
      reRoute(req,res);
  });

    function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
      return next();
    }
    res.redirect("/");
  }

  function reRoute(req,res){
     if (req.user.userType === "manager") {
      res.redirect("/manager");
    } else {
      res.redirect("/employee");
    }
  }

  function autoRedirect(req,res,next){
    if(req.isAuthenticated()){
      reRoute(req,res);
    } else {
      res.sendFile(path.resolve(__dirname, "public", "index.html"));
    }
  }

  app.get("/", autoRedirect, function(req, res){
     res.sendFile(path.resolve(__dirname, "public", "index.html"));

  });

//Public files
  app.use(express.static(__dirname + "/public"))

//Restricting routes
  app.get("/login", function(req,res) {
    res.sendFile(path.resolve(__dirname, "public", "index.html"))
  });

  app.get("/register", function(req,res) {
    res.sendFile(path.resolve(__dirname, "public", "index.html"))
  });

  app.get("/manager", isLoggedIn, function(req,res) {
      if (req.user.userType === "manager") {
          res.sendFile(path.resolve(__dirname, "public", "index.html"))
      } else {
           res.sendFile(path.resolve(__dirname, "public", "notauth.html"))
      }
  });

  app.get("/employee", isLoggedIn, function(req,res) {
      if (req.user.userType === "employee") {
        res.sendFile(path.resolve(__dirname, "public", "index.html"))
      } else {
        res.send("Hello Manager, if you would like to access the employee page, please login as employee.")
      }
  });

  app.get("/manager/employeeAll", isLoggedIn, function(req,res) {
      if (req.user.userType === "manager") {
          res.sendFile(path.resolve(__dirname, "public", "index.html"))
      } else {
          res.sendFile(path.resolve(__dirname, "public", "notauth.html"))
      }
  });

  app.get("/manager/schedulesCreate", isLoggedIn, function(req,res) {
       if (req.user.userType === "manager") {
          res.sendFile(path.resolve(__dirname, "public", "index.html"))
      } else {
          res.sendFile(path.resolve(__dirname, "public", "notauth.html"))
      }
  });

  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  var routes = require('./controllers/db_controller.js');
  app.use('/', isLoggedIn, routes);

  app.get("*", function(req,res) {
    res.sendFile(path.resolve(__dirname, "public", "404.html"))
  })

//Port Listener
  app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
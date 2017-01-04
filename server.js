  var express = require("express");
  var bodyParser = require("body-parser");
  var logger = require("morgan");
  var mongoose = require("mongoose");
  var passport = require("passport");
  var LocalStrategy= require("passport-local");
  var passportLocalMongoose = require("passport-local-mongoose");
  var path = require("path");
  var Promise = require("bluebird");
  var User = require("./models/user")

// Require Employee Schema from Database
var employee = require("./models/Employee");
var EmployeeSchedule = require("./models/employeeSchedule");
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
  passport.use(new LocalStrategy(User.authenticate()));
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

  //Getting Employees from the database
  app.get("/getAllEmployees", function(req, res) {
    employee.find({}).exec(function(err, doc) {
      if (err) {
        console.log(err);
      }
      else {
        res.send(doc);
        console.log(doc);
      }
    });
  });

<<<<<<< HEAD
=======
//Posting new Employee to the database
  app.post("/addEmployee", function(req, res) {
  // console.log("creating in server");
  console.log(req.body);
  employee.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    addressOne: req.body.addressOne,
    addressTwo: req.body.addressTwo,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    email: req.body.email,
    phone: req.body.phone,
    phoneType: req.body.phoneType
  }, function(err) {
    if (err) {
      console.log(err);
    }
    else {
      res.send("Employee Saved!");
    }
  });
});

//get employee schedules from database
  app.get("/getEmpSchedules", function(req, res) {
    console.log('in server, /getEmpSchedules');
    EmployeeSchedule.find({}).exec(function(err,docs) {
      if (err) {
        console.log(err);
        res.send(err);
      }
      else {
        console.log('in /getEmpSchedules - docs', docs);
        res.send(docs);
      }
    });
  });
>>>>>>> get emp schedules from db working

//Posting Employee Schedule to the database
app.post("/addEmpSchedule", function(req, res) {
  console.log("creating employee Schedule in server");
  console.log(req.body);
<<<<<<< HEAD
  employee.create({
=======
  EmployeeSchedule.create({
>>>>>>> get emp schedules from db working
    fullName: req.body.fullName,
    monday: req.body.monday,
    tuesday: req.body.tuesday,
    wednesday: req.body.wednesday,
    thursday: req.body.thursday,
    friday: req.body.friday,
    saturday: req.body.saturday,
    sunday: req.body.sunday
  }, function(err) {
    if (err) {
      console.log(err);
    }
    else {
      res.send("Employee Schedule Saved!");
    }
  });
});

<<<<<<< HEAD
app.get("/getEmpSchedules", function(req, res) {
  console.log('in server, /getEmpSchedules');
  EmployeeSchedule.find({})
  .exec(function(err,docs) {
    if (err) {
      console.log(err);
      res.send(err);
    }
    else {
      console.log('in /getEmpSchedules - docs', docs);
      res.send(docs);
    }
  });
});


=======
>>>>>>> get emp schedules from db working
  app.post("/register", function(req, res) {
    console.log(req.body.username)
    console.log(req.body.email)
    console.log(req.body.password)
    console.log(req.body.passwordConfirmation)
    console.log(req.body.userType)

    User.register(new User({username: req.body.username, email: req.body.email, userType: req.body.userType}), req.body.password, function(err, user) {
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

    if (req.user.userType === "employee") {
      res.redirect("/employee");
    } else {
      res.redirect("/manager");
    }

  });

  function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
      return next();
    }
    res.redirect("/");
  }

  // //Doesn't work
    app.get("/manager", isLoggedIn, function(req,res) {
      res.sendFile(path.resolve(__dirname, "public", "index.html"))
    })

    app.get("/logout", function(req, res) {
      req.logout();
      res.redirect("/");
    });

  app.get("*", function(req,res) {
    res.sendFile(path.resolve(__dirname, "public", "index.html"))
  })


<<<<<<< HEAD
//Posting new Employee to the database

  app.post("/addEmployee", function(req, res) {
  // console.log("creating in server");

  console.log(req.body);
  employee.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    addressOne: req.body.addressOne,
    addressTwo: req.body.addressTwo,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    email: req.body.email,
    phone: req.body.phone,
    phoneType: req.body.phoneType
  }, function(err) {
    if (err) {
      console.log(err);
    }
    else {
      res.send("Employee Saved!");
    }
  });
});


=======
>>>>>>> get emp schedules from db working
//Port Listener

  app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });

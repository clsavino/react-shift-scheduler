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
  app.get("/getAllEmployees", isLoggedIn, function(req, res) {
    employee.find({ "active": 1 }).exec(function(err, doc) {
      if (err) {
        console.log(err);
      }
      else {
        res.send(doc);
      }
    });
  });

  // app.get("/getEmployee/:id", isLoggedIn, function(req, res) {
  //     console.log(req.params.id);
  //   employee.find({ "_id": req.params.id }).exec(function(err, doc) {
  //     if (err) {
  //       console.log(err);
  //     }
  //     else {
  //       res.send(doc);
  //     }
  //   });
  // });

//Get employee schedules from database
  app.get("/getEmpSchedules", isLoggedIn, function(req, res) {
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

//Posting Employee Schedule to the database
  app.post("/addEmpSchedule", isLoggedIn, function(req, res) {
    console.log("creating employee Schedule in server");
    console.log(req.body);

    EmployeeSchedule.create({
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

    if (req.user.userType === "manager") {
      res.redirect("/manager");
    } else {
      res.redirect("/employee");
    }
  });

  function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
      return next();
    }
    res.redirect("/");
  }

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

  app.get("*", function(req,res) {
    res.sendFile(path.resolve(__dirname, "public", "404.html"))
  })

//Posting new Employee to the database
  app.post("/addEmployee", isLoggedIn, function(req, res) {
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

  //Updating existing employee
app.put("/updateEmployee/:id", function(req, res) {
   employee.findOneAndUpdate({ "_id": req.params.id }, {
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
       } else {
           res.send("Employee updated");
       }
   });
});

// "Remove" existing employee
app.put("/removeEmployee/:id", function(req, res) {
   employee.findOneAndUpdate({ "_id": req.params.id }, { "active": 0 })
   .exec(function(err, doc) {
       if (err) {
           console.log(err);
       } else {
           res.send(doc);
       }
   })
});

//Port Listener
  app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
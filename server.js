var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Require Employee Schema from Database
var employee = require("./models/Employee");

/////////////

var app = express();
var PORT = process.env.PORT || 7000;

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));


mongoose.connect("mongodb://localhost/scheduler");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

//Posting new Employee to the database
app.post("/addEmployee", function(req, res) {
  // console.log("creating in server");
  console.log(req.body);
  employee.create({
    name: req.body.fullName,
    address: req.body.address,
    phone: req.body.phone,
    email: req.body.email,
    ssn: req.body.ssn,
    availabiity: req.body.availabiity
  }, function(err) {
    if (err) {
      console.log(err);
    }
    else {
      res.send("Employee Saved!");
    }
  });
});

//Port Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

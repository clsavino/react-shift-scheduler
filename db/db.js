  var mongoose = require("mongoose");
  var Promise = require("bluebird");
  mongoose.Promise = Promise;

//DB
  mongoose.connect("mongodb://localhost/scheduler");
  var db = mongoose.connection;

  db.on("error", function(err) {
    console.log("Mongoose Error: ", err);
  });

  db.once("open", function() {
    console.log("Mongoose connection successful.");
  });



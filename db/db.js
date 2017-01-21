  var mongoose = require("mongoose");
  var Promise = require("bluebird");
  mongoose.Promise = Promise;

//DB
  var databaseUri ="mongodb://localhost/schedulr";

  if(process.env.MONGODB_URI) {
      mongoose.connect(process.env.MONGODB_URI);
    } else {
      mongoose.connect(databaseUri);
    }

  var db = mongoose.connection;

  db.on("error", function(err) {
    console.log("Mongoose Error: ", err);
  });

  db.once("open", function() {
    console.log("Mongoose connection successful.");
  });
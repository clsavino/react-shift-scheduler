  var mongoose = require("mongoose");
  var Promise = require("bluebird");
  mongoose.Promise = Promise;

//DB

  var databaseUri ="mongodb://heroku_jvf4gjtw:nl0adu4u9mpp8i5p5h12m7hhb9@ds159348.mlab.com:59348/heroku_jvf4gjtw";

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
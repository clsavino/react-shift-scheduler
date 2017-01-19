var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AnnouncementSchema = new Schema({
  title: {
    type: String
  },
  content: {
    type: String
  },
  // datetime: {
  //   type: Date,
  //   default: Date.now,
  // },
  active: {
      type: Number,
      default: 1
  }
});

var Announcement = mongoose.model('Announcement', AnnouncementSchema);
module.exports = Announcement;

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmployeeScheduleSchema = new Schema({
  fullName: {
    type: String,
  },
  monday: {
    type: String,
  },
  tuesday: {
    type: String,
  },
  wednesday: {
    type: String,
  },
  thursday: {
    type: String,
  },
  friday: {
    type: String,
  },
  saturday:{
    type: String,
  },
  sunday: {
    type: String,
  }
});

console.log("works");
var EmployeeSchedule = mongoose.model('EmployeeSchedule', EmployeeScheduleSchema);
module.exports = EmployeeSchedule;

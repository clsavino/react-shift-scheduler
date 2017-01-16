var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmployeeScheduleSchema = new Schema({
  emp_id: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
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
  },
  active: {
    type: Number,
    default: 1,
  }
});

var EmployeeSchedule = mongoose.model('EmployeeSchedule', EmployeeScheduleSchema);
module.exports = EmployeeSchedule;

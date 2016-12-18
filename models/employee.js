var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmployeeSchema = new Schema({
  name: {
    type: String,
  },
  address: {
    type: String,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
  },
  ssn: {
    type: String,
  },
  availabiity: {
    type: String,
  }
});

var Employee = mongoose.model('Employee', EmployeeSchema);
module.exports = Employee;

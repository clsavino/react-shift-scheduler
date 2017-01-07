var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmployeeSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    addressOne: {
        type: String
    },
    addressTwo: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    zip: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    phoneType: {
        type: String
    },
    active: {
        type: Number,
        default: 1
    }
});

var Employee = mongoose.model('Employee', EmployeeSchema);
module.exports = Employee;
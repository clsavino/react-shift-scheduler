var axios = require("axios");

var helper = {

  getAllEmployees: function() {
  return axios.get("/getAllEmployees");
},

  getEmployee: function(id) {
    console.log(id);
  return axios.get("/getEmployee/" + id);
},

  getEmpSchedules:function() {
    //console.log('helpers.getEmpSchedules Running!');
    return axios.get('/getEmpSchedules')
    .then(function(response){
        return response;
    })
  },

  addEmpSchedule:function(fullName,monday,tuesday,wednesday,thursday,friday,saturday,sunday) {
    //console.log('helper.addEmpSchedule Running!');
    return axios.post('/addEmpSchedule', {
      fullName: fullName,
      monday: monday,
      tuesday: tuesday,
      wednesday: wednesday,
      thursday: thursday,
      friday: friday,
      saturday: saturday,
      sunday: sunday
    });
  },

  updateEmpSchedule: function(empSchedule) {
    //console.log( 'helpers.updateEmpSchedule running!');
    return axios.put('/updateSchedule/' + empSchedule._id, {
      employeeSchedule: empSchedule
    });
  },

  addEmployee: function(firstName, lastName, addressOne, addressTwo, city, state, zip, email, phone, phoneType) {
    console.log("helpers.addEmployee Running")
    return axios.post("/addEmployee", {
        firstName: firstName,
        lastName: lastName,
        addressOne: addressOne,
        addressTwo: addressTwo,
        city: city,
        state: state,
        zip: zip,
        email: email,
        phone: phone,
        phoneType: phoneType });
  },

  addEmployee: function(firstName, lastName, addressOne, addressTwo, city, state, zip, email, phone, phoneType) {
    return axios.post("/addEmployee", {
        firstName: firstName,
        lastName: lastName,
        addressOne: addressOne,
        addressTwo: addressTwo,
        city: city,
        state: state,
        zip: zip,
        email: email,
        phone: phone,
        phoneType: phoneType });
  },

  updateEmployee: function(id, firstName, lastName, addressOne, addressTwo, city, state, zip, email, phone, phoneType) {
       return axios.put("/updateEmployee/" + id, {
           firstName: firstName,
           lastName: lastName,
           addressOne: addressOne,
           addressTwo: addressTwo,
           city: city,
           state: state,
           zip: zip,
           email: email,
           phone: phone,
           phoneType: phoneType
       });
  },

  removeEmployee: function(id) {
       return axios.put("/removeEmployee/" + id);
  }

  removeEmpSchedule: function() {
       return axios.put("/removeEmpSchedule/:id", {});
  }
};

module.exports = helper;

var axios = require("axios");

var helper = {

  // getAllEmployees: function() {
  //   will eventually need to:
  //   return axios.get("route_name");
  // },
  getAllEmployees: function() {
    return axios.get("/getAllEmployees");
  },

  getEmpSchedules:function() {
    console.log('helper.getEmpSchedules Running!');
    return axios.get('/getEmpSchedules')
    .then(function(response){
      console.log("axios response from /getEmpSchedules",response);
        return response;
    })
  },

  addEmpSchedule:function(fullName,monday,tuesday,wednesday,thursday,friday,saturday,sunday) {
    console.log('helper.addEmpSchedule Running!');
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
  }

  // ,
  //
  // deleteEmployee: function(title) {
  //   return axios.post("route_name/delete", { ssn: ssn });
  // }
};

module.exports = helper;

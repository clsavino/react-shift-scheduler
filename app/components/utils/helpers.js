var axios = require("axios");

var helper = {

  // getAllEmployees: function() {
  //   will eventually need to:
  //   return axios.get("route_name");
  // },
  getAllEmployees: function() {
    return axios.get("/getAllEmployees");
  },

  // addEmployee: function(fullName, address, phone, email, ssn, availability) {
  //   console.log("helpers.addEmployee Running")
  //   return axios.post("/addEmployee", { fullName: fullName, address: address, phone: phone, email: email, ssn: ssn, availability: availability });
  // }

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

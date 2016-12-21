var axios = require("axios");

var helper = {

  // getAllEmployees: function() {
  //   will eventually need to:
  //   return axios.get("route_name");
  // },

  addEmployee: function(fullName, address, phone, email, ssn, availability) {
    console.log("helpers.addEmployee Running")
    return axios.post("/addEmployee", { fullName: fullName, address: address, phone: phone, email: email, ssn: ssn, availability: availability });
  }
  // ,
  //
  // deleteEmployee: function(title) {
  //   return axios.post("route_name/delete", { ssn: ssn });
  // }
};

module.exports = helper;

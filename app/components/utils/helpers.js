var axios = require("axios");

var helper = {

  getAllEmployees: function() {
    return axios.get("/getAllEmployees");
  },

  getEmpSchedules:function() {
    console.log('helpers.getEmpSchedules Running!');
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

  // updateEmpSchedule: function(empSchedule) {
  //   console.log( 'helpers.updateEmpSchedule running!');
  //   console.log('empschedule._id',empSchedule._id)
  //   return axios.post('/updateSchedule/', {
  //     fullName: fullName,
  //     monday: monday,
  //     tuesday: tuesday,
  //     wednesday: wednesday,
  //     thursday: thursday,
  //     friday: friday,
  //     saturday: saturday,
  //     sunday: sunday
  //   });
  // },

  updateEmpSchedule: function(empSchedule) {
    console.log( 'helpers.updateEmpSchedule running!');
    console.log('empSchedule',empSchedule);
    console.log('empSchedule._id',empSchedule._id);
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

  updateEmployee: function(firstName, lastName, addressOne, addressTwo, city, state, zip, email, phone, phoneType) {
       return axios.put("/updateEmployee/:id", {
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
   removeEmployee: function() {
       return axios.put("/removeEmployee/:id", {});
   }
};

module.exports = helper;

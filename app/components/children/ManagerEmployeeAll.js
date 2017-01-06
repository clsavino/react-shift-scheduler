var React = require("react");
var helpers = require("../utils/helpers");

var ManagerEmployeeAll = React.createClass({
    getInitialState: function() {
        return {
            firstName: "",
            lastName: "",
            addressOne: "",
            addressTwo: "",
            city: "",
            state: "",
            zip: "",
            email: "",
            phone: "",
            phoneType: "",
            allEmployees: [],
            // fullName:"",
            monday:"",
            tuesday: "",
            wednesday: "",
            thursday: "",
            friday: "",
            saturday: "",
            sunday: "",
            selectedEmployee: ""
        };
    },
    componentDidMount: function() {
      helpers.getAllEmployees().then(function(response) {
        if (response !== this.state.allEmployees) {
          this.setState({ allEmployees: response.data });
        }
      }.bind(this));
    },
    handleUserChange(event) {
       this.setState({ [event.target.name]: event.target.value});
    },
    handleAddForm: function(event) {
        event.preventDefault();

        //Adds entered employee into databases
        helpers.addEmployee(this.state.firstName, this.state.lastName, this.state.addressOne, this.state.addressTwo, this.state.city, this.state.state, this.state.zip, this.state.email, this.state.phone, this.state.phoneType).then(function(response) {
            // build full name
            // this.state.fullName = this.state.firstName + " " + this.state.lastName;

            var fullName = this.state.firstName + " " + this.state.lastName;
            helpers.addEmpSchedule(fullName, this.state.monday, this.state.tuesday, this.state.wednesday, this.state.thursday, this.state.friday, this.state.saturday, this.state.sunday).then(function(response) {
                console.log('helpers.addEmpSchedule returned - response',response);

                // clear states
                this.setState({ firstName: "", lastName: "", addressOne: "", addressTwo: "", city: "", state: "", zip: "", email: "", phone: "", phoneType: ""});
            }.bind(this));
        }.bind(this));

        //Materialize Toast
        Materialize.toast('Employee added', 3000);

        //Clears out form
        var elements = document.getElementsByTagName("input");
        for (var i=0; i < elements.length; i++) {
          if ((elements[i].type == "text") || (elements[i].type == "number") || (elements[i].type == "email")) {
            elements[i].value = "";
            elements[i].classList.remove("valid");
          }
        }
        this.componentDidMount();
    },
    handleUpdateForm: function(event) {
       event.preventDefault();
       helpers.updateEmployee(this.state.firstName, this.state.lastName, this.state.addressOne, this.state.addressTwo, this.state.city, this.state.state, this.state.zip, this.state.email, this.state.phone, this.state.phoneType).then(function(response) {
           console.log("helpers.updated")
       }.bind(this));
       Materialize.toast("Employee updated", 3000);
   },
   handleRemoveForm: function(event) {
       event.preventDefault();
       helpers.removeEmployee().then(function(response) {
           console.log("helpers.removed")
       }.bind(this));
       Materialize.toast("Employee removed", 3000);
   },
    populateForm: function() {
        // console.log(this.state.selectedEmployee);
        helpers.getEmployee(this.state.selectedEmployee).then(function(response) {
            // this.setState({
            //     firstName: response.data[0].firstName,
            //     lastName: response.data[0].lastName,
            //     addressOne: response.data[0].addressOne,
            //     addressTwo: response.data[0].addressTwo,
            //     city: response.data[0].city,
            //     state: response.data[0].state,
            //     zip: response.data[0].zip,
            //     email: response.data[0].email,
            //     phone: response.data[0].phone,
            //     phoneType: response.data[0].phoneType
            // });
            // document.getElementById("firstName").value(this.state.firstName);
        }.bind(this));
    },
    clickEmployee: function(event) {
        console.log("clicked");
        this.setState({selectedEmployee: event.target.id});
        this.populateForm();
    },
    render: function() {
        return (
            <div className="row">
                <div className="col m3">
                    <table className="highlight" id="allEmployees">
                        <thead>
                            <tr>
                                <th data-field="name">Employees</th>
                            </tr>
                        </thead>
                        <tbody>
                          {this.state.allEmployees.map(function(ManagerEmployeeAll, i) {
                            return (
                                <tr key={i}>
                                  <td onClick={this.clickEmployee} id={this.state.allEmployees[i]._id}>
                                    {ManagerEmployeeAll.firstName} {ManagerEmployeeAll.lastName}
                                  </td>
                                </tr>
                            );
                          }, this)}
                        </tbody>
                    </table>
                </div>
                <div className="col m9">
                    <div className="row">
                        <form className="col m12">
                            <div className="row">
                                <div className="input-field col m6 s12">
                                    <input
                                        placeholder="First Name"
                                        id="firstName"
                                        type="text"
                                        className="validate"
                                        value={this.state.firstName}
                                        onChange={this.handleUserChange}
                                        required />
                                </div>
                                <div className="input-field col m6 s12">
                                    <input
                                        placeholder="Last Name"
                                        name="lastName"
                                        type="text"
                                        className="validate"
                                        value={this.state.lastName}
                                        onChange={this.handleUserChange}
                                        required />
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col m12 s12">
                                    <input
                                        placeholder="Address One"
                                        name="addressOne"
                                        type="text"
                                        className="validate"
                                        value={this.state.addressOne}
                                        onChange={this.handleUserChange}
                                        required />
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col m12 s12">
                                    <input
                                        placeholder="Address Two"
                                        name="addressTwo"
                                        type="text"
                                        className="validate"
                                        value={this.state.addressTwo}
                                        onChange={this.handleUserChange} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col m6 s12">
                                    <input
                                        placeholder="City"
                                        name="city"
                                        type="text"
                                        className="validate"
                                        value={this.state.city}
                                        onChange={this.handleUserChange}
                                        required />
                                </div>
                                <div className="input-field col m3 s6">
                                    <select className="browser-default" name="state" value={this.state.state} onChange={this.handleUserChange}>
                                        <option value="" disabled>State</option>
                                        <option value="AL">AL</option>
                                        <option value="AK">AK</option>
                                        <option value="AZ">AZ</option>
                                        <option value="AR">AR</option>
                                        <option value="CA">CA</option>
                                        <option value="CO">CO</option>
                                        <option value="CT">CT</option>
                                        <option value="DE">DE</option>
                                        <option value="FL">FL</option>
                                        <option value="GA">GA</option>
                                        <option value="HI">HI</option>
                                        <option value="ID">ID</option>
                                        <option value="IL">IL</option>
                                        <option value="IN">IN</option>
                                        <option value="IA">IA</option>
                                        <option value="KS">KS</option>
                                        <option value="KY">KY</option>
                                        <option value="LA">LA</option>
                                        <option value="ME">ME</option>
                                        <option value="MD">MD</option>
                                        <option value="MA">MA</option>
                                        <option value="MI">MI</option>
                                        <option value="MN">MN</option>
                                        <option value="MS">MS</option>
                                        <option value="MO">MO</option>
                                        <option value="MT">MT</option>
                                        <option value="NE">NE</option>
                                        <option value="NV">NV</option>
                                        <option value="NH">NH</option>
                                        <option value="NJ">NJ</option>
                                        <option value="NM">NM</option>
                                        <option value="NY">NY</option>
                                        <option value="NC">NC</option>
                                        <option value="ND">ND</option>
                                        <option value="OH">OH</option>
                                        <option value="OK">OK</option>
                                        <option value="OR">OR</option>
                                        <option value="PA">PA</option>
                                        <option value="RI">RI</option>
                                        <option value="SC">SC</option>
                                        <option value="SD">SD</option>
                                        <option value="TN">TN</option>
                                        <option value="TX">TX</option>
                                        <option value="UT">UT</option>
                                        <option value="VT">VT</option>
                                        <option value="VA">VA</option>
                                        <option value="WA">WA</option>
                                        <option value="WV">WV</option>
                                        <option value="WI">WI</option>
                                        <option value="WY">WY</option>
                                    </select>
                                </div>
                                <div className="input-field col m3 s6">
                                    <input
                                        placeholder="Zip"
                                        name="zip"
                                        type="number"
                                        className="validate"
                                        value={this.state.zip}
                                        onChange={this.handleUserChange}
                                        required />
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col m12 s12">
                                    <input
                                        placeholder="Email"
                                        name="email"
                                        type="email"
                                        className="validate"
                                        value={this.state.email}
                                        onChange={this.handleUserChange}
                                        required />
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col m8 s8">
                                    <input
                                        placeholder="Phone"
                                        name="phone"
                                        type="number"
                                        className="validate"
                                        value={this.state.phone}
                                        onChange={this.handleUserChange}
                                        required />
                                </div>
                                <div className="input-field col m4 s4">
                                    <select className="browser-default" name="phoneType" value={this.state.phoneType} onChange={this.handleUserChange}>
                                        <option value="mobile">Mobile</option>
                                        <option value="work">Work</option>
                                        <option value="home">Home</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s4">
                                    <button className="btn btn-large waves-effect waves-light green accent-3" onClick={this.handleAddForm}>Add
                                        <i className="material-icons right">person_add</i>
                                    </button>
                                </div>
                                <div className="col s4">
                                    <button className="btn btn-large waves-effect waves-light blue accent-3" onClick={this.handleUpdateForm}>Update
                                        <i className="material-icons right">edit</i>
                                    </button>
                                </div>
                                <div className="col s4">
                                    <button className="btn btn-large waves-effect waves-light red accent-3" onClick={this.handleRemoveForm}>Remove
                                        <i className="material-icons right">person_outline</i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = ManagerEmployeeAll;
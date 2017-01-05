var React = require("react");
var helpers = require("../utils/helpers");

var ManagerSchedulesCreate = React.createClass({

    getInitialState: function() {
      return {
        fullName: "",
        monday:"",
        tuesday:"",
        wednesday:"",
        thursday:"",
        friday:"",
        saturday:"",
        sunday:"",
        selectedEmployee:"null value",
        empSchedules: [],
        changed:[]
      };
    },

  // The moment the page renders, get the employees schedules
  componentDidMount: function() {

    helpers.getEmpSchedules().then(function(response) {
      console.log('response from helpers.getEmpSchedules - response.data',response.data);
      if (response !== this.state.empSchedules) {
        this.setState({ empSchedules: response.data });
        console.log('in componentDidMount- empSchedules',this.state.empSchedules);
      }
    }.bind(this));
  },

    handleUserChange(event) {
       this.setState({ [event.target.name]: event.target.value});
    },

    handleUpdateEmpSchedule: function(event) {
        event.preventDefault();
        helpers.updateEmpSchedule(this.state.fullName, this.state.monday, this.state.tuesday, this.state.wednesday, this.state.thursday, this.state.friday, this.state.saturday, this.state.sunday).then(function(response) {

            console.log("helpers.updateEmpSchedule Returned!")
            console.log('helpers.updateEmpSchedule - response',response);
        }.bind(this));
    },

    populateForm: function() {
        console.log('in populateForm - this.state.selectedEmployee', this.state.selectedEmployee);
    },

    clickEmployee: function(event) {
        console.log("clicked");
        //this.setState({ selectedEmployee: event.target.id });
        this.state.selectedEmployee = event.target.id;
        this.populateForm();
        console.log('this.state.selectedEmployee',this.state.selectedEmployee);
    },

    render: function() {
        return (

                <div className="row">

                    <div className="col m3">
                        <table className="highlight" id="empList">
                            <thead>
                                <tr>
                                    <th data-field="name">Employees</th>
                                </tr>
                            </thead>
                            <tbody>
                              {this.state.empSchedules.map(function(schedules, i) {
                                return (
                                    <tr key={i}>
                                      <td onClick={this.clickEmployee} id={schedules._id}>
                                        {schedules.fullName}
                                      </td>
                                    </tr>
                                );
                              }, this)}

                            </tbody>
                        </table>
                    </div>

                    <div className="col m9" id="hideDiv">
                        <div className="section">
                            <h5>Employee Schedule</h5>
                            <div className="col m12">
                            <table className="highlight">
                                <thead>
                                    <tr>
                                        <th data-field="name">Name</th>
                                        <th data-field="name">Mon</th>
                                        <th data-field="name">Tues</th>
                                        <th data-field="name">Wed</th>
                                        <th data-field="name">Thurs</th>
                                        <th data-field="name">Fri</th>
                                        <th data-field="name">Sat</th>
                                        <th data-field="name">Sun</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.empSchedules.map(function(schedules, i) {
                                        return (
                                            <tr key={i}>
                                                <td className="fullName">
                                                {schedules.fullName}
                                                </td>
                                                <td className="schedule">
                                                    <input
                                                    type="text"
                                                    value={schedules.monday}
                                                    name="monday"
                                                    onChange={this.handleUserChange}/>
                                                </td>
                                                <td>
                                                    <input
                                                    type="text"
                                                    value={schedules.tuesday}
                                                    name="tuesday"
                                                    onChange={this.handleUserChange}/>
                                                </td>
                                                <td>
                                                    <input
                                                    type="text"
                                                    value={schedules.wednesday}
                                                    name="wednesday"
                                                    onChange={this.handleUserChange}/>
                                                </td>
                                                <td>
                                                    <input
                                                    type="text"
                                                    value={schedules.thursday}
                                                    name="thursday"
                                                    onChange={this.handleUserChange}/>
                                                </td>
                                                <td>
                                                    <input
                                                    type="text"
                                                    value={schedules.friday}
                                                    name="friday"
                                                    onChange={this.handleUserChange}/>
                                                </td>
                                                <td>
                                                    <input
                                                    type="text"
                                                    value={schedules.saturday}
                                                    name="saturday"
                                                    onChange={this.handleUserChange}/>
                                                </td>
                                                <td>
                                                    <input
                                                    type="text"
                                                    value={schedules.sunday}
                                                    name="sunday"
                                                    onChange={this.handleUserChange}/>
                                                </td>
                                            </tr>
                                        );
                                    }, this)}
                                </tbody>
                            </table>
                          </div>
                        </div>
                    </div>

                    <div className="col m9" >
                        <div className="section">
                            <h5>Schedule Editor</h5>
                            <div className="col m12">
                            <table className="highlight">
                                <thead>
                                    <tr>
                                        <th data-field="name">Name</th>
                                        <th data-field="name">Mon</th>
                                        <th data-field="name">Tues</th>
                                        <th data-field="name">Wed</th>
                                        <th data-field="name">Thurs</th>
                                        <th data-field="name">Fri</th>
                                        <th data-field="name">Sat</th>
                                        <th data-field="name">Sun</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.empSchedules.map(function(schedules, i) {
                                        return (
                                            <tr key={i}>
                                                <td className="fullName">
                                                {schedules.fullName}
                                                </td>
                                                <td className="schedule">
                                                    <input
                                                    type="text"
                                                    value={schedules.monday}
                                                    name="monday"
                                                    onChange={this.handleUserChange}/>
                                                </td>
                                                <td>
                                                    <input
                                                    type="text"
                                                    value={schedules.tuesday}
                                                    name="tuesday"
                                                    onChange={this.handleUserChange}/>
                                                </td>
                                                <td>
                                                    <input
                                                    type="text"
                                                    value={schedules.wednesday}
                                                    name="wednesday"
                                                    onChange={this.handleUserChange}/>
                                                </td>
                                                <td>
                                                    <input
                                                    type="text"
                                                    value={schedules.thursday}
                                                    name="thursday"
                                                    onChange={this.handleUserChange}/>
                                                </td>
                                                <td>
                                                    <input
                                                    type="text"
                                                    value={schedules.friday}
                                                    name="friday"
                                                    onChange={this.handleUserChange}/>
                                                </td>
                                                <td>
                                                    <input
                                                    type="text"
                                                    value={schedules.saturday}
                                                    name="saturday"
                                                    onChange={this.handleUserChange}/>
                                                </td>
                                                <td>
                                                    <input
                                                    type="text"
                                                    value={schedules.sunday}
                                                    name="sunday"
                                                    onChange={this.handleUserChange}/>
                                                </td>
                                            </tr>
                                        );
                                    }, this)}
                                </tbody>
                            </table>
                          </div>
                        </div>
                    </div>
                </div>

        );
    }
});

module.exports = ManagerSchedulesCreate;

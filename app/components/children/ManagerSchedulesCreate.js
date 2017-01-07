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
        selectedEmployee:"",
        empSchedules: [],
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

    handleUserChange: function(index, event) {
        let updatedEmpSchedules = this.state.empSchedules.map((empSchedule, i) => {
            if(index === i){
                empSchedule[event.target.name] = event.target.value;
                this.state.selectedEmployee = empSchedule;
            }
            console.log('handleUserChange empSchedule',empSchedule);
            console.log('\n this.state.selectedEmployee',this.state.selectedEmployee);
            console.log('\n this.state.selectedEmployee._id',this.state.selectedEmployee._id);
            return empSchedule;
        });
        this.setState({ empSchedules: updatedEmpSchedules});
        console.log('handleUserChange - empSchedules', this.state.empSchedules);
        //his.state.monday = event.target.value;
        //console.log('handleUserChange - event.target.value', event.target.value);


    },

    handleUpdateEmpSchedule: function(event) {
        event.preventDefault();
        helpers.updateEmpSchedule(this.state.selectedEmployee).then(function(response) {

            console.log("helpers.updateEmpSchedule Returned!")
            console.log('helpers.updateEmpSchedule - response',response);
        }.bind(this));
    },

    render: function() {
        return (

                <div className="row">
                    <div className="col m12" >
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
                                                    onChange={this.handleUserChange.bind(this, i)}/>
                                                </td>
                                                <td>
                                                    <input
                                                    type="text"
                                                    value={schedules.tuesday}
                                                    name="tuesday"
                                                    onChange={this.handleUserChange.bind(this, i)}/>
                                                </td>
                                                <td>
                                                    <input
                                                    type="text"
                                                    value={schedules.wednesday}
                                                    name="wednesday"
                                                    onChange={this.handleUserChange.bind(this, i)}/>
                                                </td>
                                                <td>
                                                    <input
                                                    type="text"
                                                    value={schedules.thursday}
                                                    name="thursday"
                                                    onChange={this.handleUserChange.bind(this, i)}/>
                                                </td>
                                                <td>
                                                    <input
                                                    type="text"
                                                    value={schedules.friday}
                                                    name="friday"
                                                    onChange={this.handleUserChange.bind(this, i)}/>
                                                </td>
                                                <td>
                                                    <input
                                                    type="text"
                                                    value={schedules.saturday}
                                                    name="saturday"
                                                    onChange={this.handleUserChange.bind(this, i)}/>
                                                </td>
                                                <td>
                                                    <input
                                                    type="text"
                                                    value={schedules.sunday}
                                                    name="sunday"
                                                    onChange={this.handleUserChange.bind(this, i)}/>
                                                </td>
                                                <td>
                                                    <button onClick={this.handleUpdateEmpSchedule} className="btn btn-small waves-effect waves-light green accent-3">Add<i className="material-icons right">person_add</i>></button>
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

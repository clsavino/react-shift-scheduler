var React = require("react");
var helpers = require("../utils/helpers");

var ManagerSchedulesCreate = React.createClass({

    getInitialState: function() {
      return {
        firstName:"",
        lastName:"",
        monday:"",
        tuesday:"",
        wednesday:"",
        thursday:"",
        friday:"",
        saturday:"",
        sunday:"",
        selectedEmpSchedule:"",
        empSchedules: [],
      };
    },

    componentDidMount: function() {
        helpers.getEmpSchedules().then(function(response) {
          if (response !== this.state.empSchedules) {
            this.setState({ empSchedules: response.data });
          }
        }.bind(this));
    },

    handleUserChange: function(index, event) {
        let updatedEmpSchedules = this.state.empSchedules.map((empSchedule, i) => {
            if(index === i){
                empSchedule[event.target.name] = event.target.value;
                this.state.selectedEmpSchedule = empSchedule;
            }
            return empSchedule;
        });
        this.setState({ empSchedules: updatedEmpSchedules});
    },

    handleUpdateEmpSchedule: function(event) {
        //event.preventDefault();
        helpers.updateEmpSchedule(this.state.selectedEmpSchedule).then(function(response) {
            var empName = this.state.selectedEmpSchedule.firstName + " " + this.state.selectedEmpSchedule.lastName + "'s ";
            Materialize.toast(empName + "schedule updated", 3000);
            this.clearStates();
        }.bind(this));
    },

    clearStates: function(cb) {
        this.setState({ firstName: "", lastName: "", monday: "", tuesday: "", wednesday: "", thursday: "", friday: "", saturday: "", sunday: ""}, function() {
            console.log("in clearStates this.state.firstName",this.state.firstName);
        });
    },

    handleClearEmpSchedule: function(index,event) {
        event.preventDefault();
        this.clearStates();
        let updatedEmpSchedules = this.state.empSchedules.map((empSchedule, i) => {
            if(index === i){
                empSchedule[event.target.name] = event.target.value;
                this.state.selectedEmpSchedule = empSchedule;
            }
            return empSchedule;
        });
        this.setState({ empSchedules: updatedEmpSchedules});
    },

    render: function() {
        return (

                <div className="row">
                    <div className="col m12" >
                        <div className="section">
                            <h5>Schedule Editor</h5>

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
                                                {schedules.firstName} {schedules.lastName}
                                                </td>
                                                <td className="">
                                                    <div className="input-field schedule">
                                                        <select className="browser-default" name="monday" value={schedules.monday} onChange={this.handleUserChange.bind(this, i)}>
                                                        <option value=""></option>
                                                        <option value="8am-5pm">8am-5pm</option>
                                                        <option value="9am-6pm">9am-6pm</option>
                                                        <option value="10am-7pm">10am-7pm</option>
                                                        <option value="11am-8pm">11am-8pm</option>
                                                        <option value="12pm-9pm">12pm-9pm</option>
                                                        <option value="1pm-10pm">1pm-10pm</option>
                                                        <option value="2pm-11pm">2pm-11pm</option>
                                                        <option value="3pm-12am">3pm-12am</option>
                                                    </select>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-field schedule">
                                                        <select className="browser-default" name="tuesday" value={schedules.tuesday} onChange={this.handleUserChange.bind(this, i)}>
                                                        <option value=""></option>
                                                        <option value="8am-5pm">8am-5pm</option>
                                                        <option value="9am-6pm">9am-6pm</option>
                                                        <option value="10am-7pm">10am-7pm</option>
                                                        <option value="11am-8pm">11am-8pm</option>
                                                        <option value="12pm-9pm">12pm-9pm</option>
                                                        <option value="1pm-10pm">1pm-10pm</option>
                                                        <option value="2pm-11pm">2pm-11pm</option>
                                                        <option value="3pm-12am">3pm-12am</option>
                                                    </select>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-field schedule">
                                                        <select className="browser-default" name="wednesday" value={schedules.wednesday} onChange={this.handleUserChange.bind(this, i)}>
                                                        <option value=""></option>
                                                        <option value="8am-5pm">8am-5pm</option>
                                                        <option value="9am-6pm">9am-6pm</option>
                                                        <option value="10am-7pm">10am-7pm</option>
                                                        <option value="11am-8pm">11am-8pm</option>
                                                        <option value="12pm-9pm">12pm-9pm</option>
                                                        <option value="1pm-10pm">1pm-10pm</option>
                                                        <option value="2pm-11pm">2pm-11pm</option>
                                                        <option value="3pm-12am">3pm-12am</option>
                                                    </select>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-field schedule">
                                                        <select className="browser-default" name="thursday" value={schedules.thursday} onChange={this.handleUserChange.bind(this, i)}>
                                                        <option value=""></option>
                                                        <option value="8am-5pm">8am-5pm</option>
                                                        <option value="9am-6pm">9am-6pm</option>
                                                        <option value="10am-7pm">10am-7pm</option>
                                                        <option value="11am-8pm">11am-8pm</option>
                                                        <option value="12pm-9pm">12pm-9pm</option>
                                                        <option value="1pm-10pm">1pm-10pm</option>
                                                        <option value="2pm-11pm">2pm-11pm</option>
                                                        <option value="3pm-12am">3pm-12am</option>
                                                    </select>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-field schedule">
                                                        <select className="browser-default" name="friday" value={schedules.friday} onChange={this.handleUserChange.bind(this, i)}>
                                                        <option value=""></option>
                                                        <option value="8am-5pm">8am-5pm</option>
                                                        <option value="9am-6pm">9am-6pm</option>
                                                        <option value="10am-7pm">10am-7pm</option>
                                                        <option value="11am-8pm">11am-8pm</option>
                                                        <option value="12pm-9pm">12pm-9pm</option>
                                                        <option value="1pm-10pm">1pm-10pm</option>
                                                        <option value="2pm-11pm">2pm-11pm</option>
                                                        <option value="3pm-12am">3pm-12am</option>
                                                    </select>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-field schedule">
                                                        <select className="browser-default" name="saturday" value={schedules.saturday} onChange={this.handleUserChange.bind(this, i)}>
                                                        <option value=""></option>
                                                        <option value="8am-5pm">8am-5pm</option>
                                                        <option value="9am-6pm">9am-6pm</option>
                                                        <option value="10am-7pm">10am-7pm</option>
                                                        <option value="11am-8pm">11am-8pm</option>
                                                        <option value="12pm-9pm">12pm-9pm</option>
                                                        <option value="1pm-10pm">1pm-10pm</option>
                                                        <option value="2pm-11pm">2pm-11pm</option>
                                                        <option value="3pm-12am">3pm-12am</option>
                                                    </select>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-field schedule">
                                                        <select className="browser-default" name="sunday" value={schedules.sunday} onChange={this.handleUserChange.bind(this, i)}>
                                                        <option value=""></option>
                                                        <option value="8am-5pm">8am-5pm</option>
                                                        <option value="9am-6pm">9am-6pm</option>
                                                        <option value="10am-7pm">10am-7pm</option>
                                                        <option value="11am-8pm">11am-8pm</option>
                                                        <option value="12pm-9pm">12pm-9pm</option>
                                                        <option value="1pm-10pm">1pm-10pm</option>
                                                        <option value="2pm-11pm">2pm-11pm</option>
                                                        <option value="3pm-12am">3pm-12am</option>
                                                    </select>
                                                    </div>
                                                </td>
                                                <td>
                                                    <button onClick={this.handleUpdateEmpSchedule.bind(this, i)} className="btn btn-small waves-effect waves-light green accent-3">Add</button>
                                                </td>
                                                <td>
                                                    <button onClick={this.handleClearEmpSchedule.bind(this, i)} className="btn btn-small waves-effect waves-light green accent-3">Clear</button>
                                                </td>
                                            </tr>
                                        );
                                    }, this)}
                                </tbody>
                            </table>
                          </div>
                        </div>
                    </div>

        );
    }
});

module.exports = ManagerSchedulesCreate;

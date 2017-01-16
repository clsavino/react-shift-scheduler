var React = require("react");
var helpers = require("../utils/helpers");

var ManagerHome = React.createClass({

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
        empSchedules: [],
      };
    },

  componentDidMount: function() {
    helpers.getEmpSchedules().then(function(response) {
      console.log('response from helpers.getEmpSchedules - response.data',response.data);
      if (response !== this.state.empSchedules) {
        this.setState({ empSchedules: response.data });
        console.log('in componentDidMount- empSchedules',this.state.empSchedules);
      }
    }.bind(this));
  },

    render: function() {
        return (
            <div className="row">
                <div className="col m12">
                    <div className="section">
                        <h5>Week at a glance</h5>

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
                                        <td className="schedule">
                                            {schedules.monday}
                                        </td>
                                        <td>
                                            {schedules.tuesday}
                                        </td>
                                        <td>
                                            {schedules.wednesday}
                                        </td>
                                        <td>
                                            {schedules.thursday}
                                        </td>
                                        <td>
                                            {schedules.friday}
                                        </td>
                                        <td>
                                            {schedules.saturday}
                                        </td>
                                        <td>
                                            {schedules.sunday}
                                        </td>
                                    </tr>
                                );
                          }, this)}


                            </tbody>
                        </table>

                    <div className="divider"></div>
                    <div className="section">
                        <h5>Announcements</h5>
                        {/* <p>Stuff</p> */}
                    </div>
                    {/* <div className="divider"></div>
                    <div className="section">
                        <h5>Section 3</h5>
                        <p>More stuff</p>
                    </div> */}
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = ManagerHome;

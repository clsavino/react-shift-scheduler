var React = require("react");

var ManagerHome = React.createClass({
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
                                    <th data-field="name">Weds</th>
                                    <th data-field="name">Thurs</th>
                                    <th data-field="name">Fri</th>
                                    <th data-field="name">Sat</th>
                                    <th data-field="name">Sun</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Alex</td>
                                    <td></td>
                                    <td></td>
                                    <td>10AM-3PM</td>
                                    <td></td>
                                    <td>10AM-4PM</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Brian</td>
                                    <td></td>
                                    <td>9AM-2PM</td>
                                    <td>9AM-3PM</td>
                                    <td></td>
                                    <td>10AM-4PM</td>
                                    <td>8AM-4PM</td>
                                    <td>7AM-1PM</td>
                                </tr>
                                <tr>
                                    <td>Cathy</td>
                                    <td>9AM-3PM</td>
                                    <td></td>
                                    <td>8AM-2PM</td>
                                    <td>10AM-4PM</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
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
        );
    }
});

module.exports = ManagerHome;
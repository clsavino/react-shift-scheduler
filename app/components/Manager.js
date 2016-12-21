var React = require("react");
var helpers = require("./utils/helpers");

var Manager = React.createClass({
    render: function() {
        return (
            <div>
                <ul id="dropdown1" className="dropdown-content">
                    <li><a href="#/manager/addEmployee">Add</a></li>
                    <li><a href="#/manager/updateEmployee">Update</a></li>
                    <li><a href="#/manager/removeEmployee">Remove</a></li>
                </ul>
                <ul id="dropdown2" className="dropdown-content">
                    <li><a href="#/manager/viewSchedules">View</a></li>
                    <li><a href="#/manager/editSchedules">Edit</a></li>
                    <li><a href="#/manager/reportsSchedules">Reports</a></li>
                </ul>
                <ul id="dropdown3" className="dropdown-content">
                    <li><a href="#/manager/createBilling">Create</a></li>
                    <li><a href="#/manager/viewBilling">View</a></li>
                </ul>
                <ul><a href="/logout">Logout</a>
                </ul>
                <nav>
                    <div className="nav-wrapper teal lighten-2">
                        <a href="#!" className="brand-logo"> Hello [Manager]</a>
                        <a href="#" data-activates="slide-out" className="button-collapse"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li><a className="dropdown-button" href="#" data-activates="dropdown1" data-beloworigin="true" data-hover="true">Employee Management<i className="material-icons right">group</i></a></li>
                            <li><a className="dropdown-button" href="#" data-activates="dropdown2" data-beloworigin="true" data-hover="true">Schedules<i className="material-icons right">access_time</i></a></li>
                            <li><a className="dropdown-button" href="#" data-activates="dropdown3" data-beloworigin="true" data-hover="true">Billing<i className="material-icons right">monetization_on</i></a></li>
                        </ul>
                        <ul id="slide-out" className="side-nav">
                            <li>
                                <div className="userView">
                                    <div className="background">
                                        <img src="http://materializecss.com/images/office.jpg"/>
                                    </div>
                                    <a><img className="circle" src="http://materializecss.com/images/yuna.jpg"/></a>
                                    <a><span className="white-text">Company Name</span></a>
                                    <a><span className="white-text name">John Doe</span></a>
                                </div>
                            </li>
                            <li><a className="subheader"><i className="material-icons">group</i>Employee Management</a></li>
                            <li><a href="#/manager/addEmployee">Add</a></li>
                            <li><a href="#/manager/updateEmployee">Update</a></li>
                            <li><a href="#/manager/removeEmployee">Remove</a></li>
                            <li><div className="divider"></div></li>
                            <li><a className="subheader"><i className="material-icons">access_time</i>Schedules</a></li>
                            <li><a href="#/manager/viewSchedules">View</a></li>
                            <li><a href="#/manager/editSchedules">Edit</a></li>
                            <li><a href="#/manager/reportsSchedules">Reports</a></li>
                            <li><div className="divider"></div></li>
                            <li><a className="subheader"><i className="material-icons">monetization_on</i>Billing</a></li>
                            <li><a href="#/manager/createBilling">Create</a></li>
                            <li><a href="#/manager/viewBilling">View</a></li>
                        </ul>
                    </div>
                </nav>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
});

module.exports = Manager;
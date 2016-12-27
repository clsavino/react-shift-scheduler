var React = require("react");
var helpers = require("./utils/helpers");

var Manager = React.createClass({
    render: function() {
        return (
            <div>
                <ul id="dropdown1" className="dropdown-content">
                    <li><a className="grey-text text-darken-3" href="#/manager/employeeAdd">Add</a></li>
                    <li><a className="grey-text text-darken-3" href="#/manager/employeeUpdate">Update</a></li>
                    <li><a className="grey-text text-darken-3" href="#/manager/employeeRemove">Remove</a></li>
                </ul>
                <ul id="dropdown2" className="dropdown-content">
                    <li><a className="grey-text text-darken-3" href="#/manager/schedulesView">View</a></li>
                    <li><a className="grey-text text-darken-3" href="#/manager/schedulesEdit">Edit</a></li>
                    <li><a className="grey-text text-darken-3" href="#/manager/schedulesReport">Reports</a></li>
                </ul>
                <ul id="dropdown3" className="dropdown-content">
                    <li><a className="grey-text text-darken-3" href="#/manager/billingCreate">Create</a></li>
                    <li><a className="grey-text text-darken-3" href="#/manager/billingView">View</a></li>
                </ul>
                <nav>
                    <div className="nav-wrapper grey lighten-5">
                        <a href="#/manager" className="brand-logo blue-text text-darken-1"><img id="logo" src="assets/images/logo.png"/>Hello [Manager]</a>
                        <a href="#" data-activates="slide-out" className="button-collapse blue-text text-darken-1"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li><a className="dropdown-button black-text" href="#" data-activates="dropdown1" data-beloworigin="true" data-hover="true">Employee Management<i className="material-icons right">group</i></a></li>
                            <li><a className="dropdown-button black-text" href="#" data-activates="dropdown2" data-beloworigin="true" data-hover="true">Schedules<i className="material-icons right">access_time</i></a></li>
                            <li><a className="dropdown-button black-text" href="#" data-activates="dropdown3" data-beloworigin="true" data-hover="true">Billing<i className="material-icons right">monetization_on</i></a></li>
                            <li><a className="black-text" href="/logout">Logout<i className="material-icons right">exit_to_app</i></a></li>
                        </ul>
                        <ul id="slide-out" className="side-nav">
                            <li>
                                <div className="userView">
                                    <div className="background">
                                        <img src="http://materializecss.com/images/office.jpg"/>
                                    </div>
                                    <a><img className="circle" src="assets/images/logo.png"/></a>
                                    <a><span className="white-text">Company Name</span></a>
                                    <a><span className="white-text name">John Doe</span></a>
                                </div>
                            </li>
                            <li><a className="subheader black-text"><i className="material-icons">group</i>Employee Management</a></li>
                            <li><a href="#/manager/employeeAdd">Add</a></li>
                            <li><a href="#/manager/employeeUpdate">Update</a></li>
                            <li><a href="#/manager/employeeRemove">Remove</a></li>
                            <li><div className="divider"></div></li>
                            <li><a className="subheader black-text"><i className="material-icons">access_time</i>Schedules</a></li>
                            <li><a href="#/manager/schedulesView">View</a></li>
                            <li><a href="#/manager/schedulesEdit">Edit</a></li>
                            <li><a href="#/manager/schedulesReport">Reports</a></li>
                            <li><div className="divider"></div></li>
                            <li><a className="subheader black-text"><i className="material-icons">monetization_on</i>Billing</a></li>
                            <li><a href="#/manager/billingCreate">Create</a></li>
                            <li><a href="#/manager/billingView">View</a></li>
                            <li><div className="divider"></div></li>
                            <li><a className="black-text" href="/logout"><i className="material-icons">exit_to_app</i>Logout</a></li>
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
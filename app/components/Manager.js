var React = require("react");
var ManagerView = require("./children/ManagerView");
var ManagerViewEmployeeAdd = require("./children/ManagerViewEmployeeAdd")
var helpers = require("./utils/helpers");

var Manager = React.createClass({
    render: function() {
        return (
            <div>
                <ul id="dropdown1" className="dropdown-content">
                    <li><a href="#!">Add</a></li>
                    <li><a href="#!">Update</a></li>
                    <li><a href="#!">Remove</a></li>
                </ul>
                <ul id="dropdown2" className="dropdown-content">
                    <li><a href="#!">View</a></li>
                    <li><a href="#!">Edit</a></li>
                    <li><a href="#!">Reports</a></li>
                </ul>
                <ul id="dropdown3" className="dropdown-content">
                    <li><a href="#!">Create</a></li>
                    <li><a href="#!">View</a></li>
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
                                    <a href="#!user"><img className="circle" src="http://materializecss.com/images/yuna.jpg"/></a>
                                    <a href="#!name"><span className="white-text name">John Doe</span></a>
                                    <a href="#!email"><span className="white-text email">johndoe@gmail.com</span></a>
                                </div>
                            </li>
                            <li><a className="subheader"><i className="material-icons">group</i>Employee Management</a></li>
                            <li><a href="#!">Add</a></li>
                            <li><a href="#!">Update</a></li>
                            <li><a href="#!">Remove</a></li>
                            <li><div className="divider"></div></li>
                            <li><a className="subheader"><i className="material-icons">access_time</i>Schedules</a></li>
                            <li><a href="#!">View</a></li>
                            <li><a href="#!">Edit</a></li>
                            <li><a href="#!">Reports</a></li>
                            <li><div className="divider"></div></li>
                            <li><a className="subheader"><i className="material-icons">monetization_on</i>Billing</a></li>
                            <li><a href="#!">Create</a></li>
                            <li><a href="#!">View</a></li>
                        </ul>
                    </div>
                </nav>
                {/* <div className="container">
                    <ManagerView />
                </div> */}
                <div className="container">
                    <ManagerViewEmployeeAdd />
                </div>
            </div>
        );
    }
});

module.exports = Manager;
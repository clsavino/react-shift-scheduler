var React = require("react");
var helpers = require("./utils/helpers");

var Employee = React.createClass({
    render: function() {
        return (
            <div>
                <ul id="dropdown1" className="dropdown-content">
                    <li><a className="grey-text text-darken-3" href="#!">Update</a></li>
                    <li><a className="grey-text text-darken-3" href="#!">Remove</a></li>
                </ul>
                <ul id="dropdown2" className="dropdown-content">
                    <li><a className="grey-text text-darken-3" href="#!">View</a></li>
                    <li><a className="grey-text text-darken-3" href="#!">Swap</a></li>
                </ul>
                <nav>
                    <div className="nav-wrapper grey lighten-5">
                        <a href="/employee" className="brand-logo blue-text text-darken-1"><img id="logo" src="/assets/images/logo.png"/><span className="hide-on-med-and-down">Hello [Employee]</span></a>
                        <a href="/" data-activates="slide-out" className="button-collapse blue-text text-darken-1"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li><a className="dropdown-button black-text" href="/" data-activates="dropdown1" data-beloworigin="true" data-hover="true">My Info<i className="material-icons right">account_circle</i></a></li>
                            <li><a className="dropdown-button black-text" href="/" data-activates="dropdown2" data-beloworigin="true" data-hover="true">Schedule<i className="material-icons right">access_time</i></a></li>
                            <li><a className="black-text" href="/logout">Logout<i className="material-icons right">exit_to_app</i></a></li>
                        </ul>
                        <ul id="slide-out" className="side-nav">
                            <li>
                                <div className="userView">
                                    <div className="background">
                                        <img src="http://materializecss.com/images/office.jpg"/>
                                    </div>
                                    <a><img className="circle" src="/assets/images/logo.png"/></a>
                                    <a><span className="white-text">Company Name</span></a>
                                    <a><span className="white-text name">John Doe</span></a>
                                </div>
                            </li>
                            <li><a className="subheader black-text"><i className="material-icons">account_circle</i>My Info</a></li>
                            <li><a href="#!">Update</a></li>
                            <li><a href="#!">Remove</a></li>
                            <li><div className="divider"></div></li>
                            <li><a className="subheader black-text"><i className="material-icons">access_time</i>Schedule</a></li>
                            <li><a href="#!">View</a></li>
                            <li><a href="#!">Swap</a></li>
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

module.exports = Employee;
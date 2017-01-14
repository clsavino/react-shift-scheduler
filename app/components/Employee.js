var React = require("react");
var helpers = require("./utils/helpers");

var Employee = React.createClass({
    render: function() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper grey lighten-5">
                        <a href="/employee" className="brand-logo blue-text text-darken-1"><img id="logo" src="/assets/images/logo.png"/><span className="hide-on-med-and-down">Schedulr</span></a>
                        <a href="/" data-activates="slide-out" className="button-collapse blue-text text-darken-1"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li><a className="black-text" href="/employee">Home<i className="material-icons right">home</i></a></li>
                            <li><a className="black-text" href="/">My Info<i className="material-icons right">account_circle</i></a></li>
                            <li><a className="black-text" href="/">Schedule<i className="material-icons right">access_time</i></a></li>
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
                            <li><a href="/manager" className="black-text"><i className="material-icons">home</i>Home</a></li>
                            <li><a href="/manager/employeeAll" className="black-text"><i className="material-icons">account_circle</i>My Info</a></li>
                            <li><a href="/manager/schedulesCreate" className="black-text"><i className="material-icons">access_time</i>Schedules</a></li>
                            <li><a href="/logout" className="black-text"><i className="material-icons">exit_to_app</i>Logout</a></li>
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
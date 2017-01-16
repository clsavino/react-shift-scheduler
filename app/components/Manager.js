var React = require("react");
var helpers = require("./utils/helpers");

var Manager = React.createClass({

    getInitialState: function() {
        return {
            username: "",
            picture: ""
        };
    },

    componentDidMount: function() {
       helpers.getCurrentUser().then(function(response) {
          if (response !== this.state.username) {
            this.setState({ picture: response.data.picture, username: response.data.username });
          }
        }.bind(this));
    },

    render: function() {
        return (
            <div>
                <ul id="dropdown1" className="dropdown-content">
                    <li><a className="black-text" href="/logout">Logout<i className="material-icons right">exit_to_app</i></a></li>
                </ul>
                <nav>
                    <div className="nav-wrapper grey lighten-5">
                        <a href="/manager" className="brand-logo blue-text text-darken-1"><img id="logo" src="/assets/images/logo.png"/><span className="hide-on-med-and-down">Schedulr</span></a>
                        <a href="/" data-activates="slide-out" className="button-collapse blue-text text-darken-1"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li><a className="black-text" href="/manager/employeeAll">Employee Management<i className="material-icons right">group</i></a></li>
                            <li><a className="black-text" href="/manager/schedulesCreate">Schedules<i className="material-icons right">access_time</i></a></li>
                            <li><a className="dropdown-button black-text" href="#" data-activates="dropdown1" data-beloworigin="true" data-hover="true">{this.state.username}<img className="circle circle-small" src={this.state.picture}/></a></li>
                        </ul>
                        <ul id="slide-out" className="side-nav">
                            <li>
                                <div className="userView">
                                    <div className="background">
                                        <img src="http://materializecss.com/images/office.jpg"/>
                                    </div>
                                    <a><img className="circle" src={this.state.picture}/></a>
                                    <a><span className="white-text">Company Name</span></a>
                                    <a><span className="white-text name">{this.state.username}</span></a>
                                </div>
                            </li>
                            <li><a href="/manager/employeeAll" className="black-text"><i className="material-icons">group</i>Employee Management</a></li>
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

module.exports = Manager;
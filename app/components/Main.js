var React = require("react");
var helpers = require("./utils/helpers");
var Login = require("./children/Login")
var Register = require("./children/Register")
var Schedule = require("./children/Schedule")


var Main = React.createClass({
    render: function() {
      return (
        <div>
          <nav>
            <div className="nav-wrapper teal lighten-2">
              <a href="#!" className="brand-logo"> Scheduler</a>
              <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
              <ul className="right hide-on-med-and-down">
                <li><a href="#">Login</a></li>
                <li><a href="#">Register</a></li>
              </ul>
              <ul className="side-nav" id="mobile-demo">
                <li><a href="#">Login</a></li>
                <li><a href="#">Register</a></li>
              </ul>
            </div>
          </nav>

          <div className="container">
            <Login />
          </div>
        </div>

      );
    }
});

module.exports = Main;
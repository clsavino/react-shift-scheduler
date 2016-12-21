var React = require("react");
var helpers = require("./utils/helpers");

var Main = React.createClass({
    render: function() {
      return (
        <div>
          <nav>
            <div className="nav-wrapper teal lighten-2">
              <a href="/login" className="brand-logo"> Scheduler</a>
              <a href="/login" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
              <ul className="right hide-on-med-and-down">
                <li><a href="/login">Login</a></li>
                <li><a href="/register">Register</a></li>
              </ul>
              <ul className="side-nav" id="mobile-demo">
                <li><a href="/login">Login</a></li>
                <li><a href="/register">Register</a></li>
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

module.exports = Main;
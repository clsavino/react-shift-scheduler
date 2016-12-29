var React = require("react");
var helpers = require("./utils/helpers");

var Main = React.createClass({
    render: function() {
        return (
            <div>
              <nav>
                    <div className="nav-wrapper grey darken-3">
    
                      <a href="#/login" className="brand-logo center blue-text text-darken-1"><img id="logo" src="assets/images/logo.png"/>Schedulr</a>

                      <a href="#/login" data-activates="mobile-demo" className="button-collapse"><i className="material-icons blue-text text-darken-1">menu</i></a>
                      <ul className="right hide-on-med-and-down">
                        <li><a href="#/login">Login</a></li>
                        <li><a href="#/register">Register</a></li>
                        <li><a href="/logout">Logout</a></li>
                      </ul>
                      <ul className="side-nav" id="mobile-demo">
                        <li><a href="#/login">Login</a></li>
                        <li><a href="#/register">Register</a></li>
                        <li><a href="/logout">Logout</a></li>
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

var React = require("react");
var helpers = require("./utils/helpers");

var Main = React.createClass({
    render: function() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper grey lighten-5">
                        <a className="brand-logo center blue-text text-darken-1"><img id="logo" src="assets/images/logo.png"/>Schedulr</a>
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

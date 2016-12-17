var React = require("react");
var helpers = require("./utils/helpers");

// create main component
var Main = React.createClass({
    render: function() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col m12">
                        <h1>Hello</h1>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Main;
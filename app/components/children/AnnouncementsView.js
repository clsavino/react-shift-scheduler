var React = require("react");

var AnnouncementsView = React.createClass({
    render: function() {
        return (
            <div className="card-panel">
                <div className="row">
                    <div className="col s12">
                        <h5>Latest announcement</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        {/* <h5>{this.state.title}</h5> */}
                        <h5>{this.props.title}</h5>
                        <p>{this.props.content}</p>
                        {/* <p>{this.state.content}</p> */}
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = AnnouncementsView;
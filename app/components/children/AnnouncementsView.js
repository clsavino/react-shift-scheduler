var React = require("react");
var helpers = require("../utils/helpers");

var AnnouncementsView = React.createClass({
    getInitialState: function() {
        return {
            title: "",
            content: "",
            datetime: ""
        };
    },

    componentDidMount: function() {
        this.getAnnouncements();
    },

    // componentDidUpdate: function () {
    //     this.getAnnouncements();
    // },

    getAnnouncements: function() {
        helpers.getAnnouncements().then(function(response) {
        //   console.log(response.data[response.data.length - 1]);
          this.setState({
            title: response.data[response.data.length -1].title,
            content: response.data[response.data.length -1].content
          });

        //   if (response !== this.state.allEmployees) {
        //       this.setState({ allEmployees: response.data });
        //       this.activeButtons();
        //   }
        }.bind(this));
    },

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
                        <h5>{this.state.title}</h5>
                        <p>{this.state.content}</p>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = AnnouncementsView;
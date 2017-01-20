var React = require("react");
var helpers = require("../utils/helpers");
var ScheduleView =  require("./ScheduleView");
var AnnouncementsView =  require("./AnnouncementsView");

var EmployeeHome = React.createClass({
    getInitialState: function() {
        return {
            title: "",
            content: ""
        };
    },

    componentDidMount: function() {
        this.getAnnouncements();
    },

    // componentDidUpdate: function(prevState) {
    //     if (prevState.title !== this.state.title || prevState.content !== this.state.content) {
    //         this.getAnnouncements();
    //     }
    // },

    getAnnouncements: function() {
        helpers.getAnnouncements().then(function(response) {
          this.setState({
            title: response.data[response.data.length -1].title,
            content: response.data[response.data.length -1].content
          });
        }.bind(this));
    },

    render: function() {
        return (
            <div>
                <AnnouncementsView title={this.state.title} content={this.state.content}/>
                <ScheduleView />
            </div>
        );
    }
});

module.exports = EmployeeHome;
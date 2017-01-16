var React = require("react");
var helpers = require("../utils/helpers");

var AnnouncementsView = React.createClass({
    // getInitialState: function() {
    //     return {
    //         title: "",
    //         content: "",
    //         datetime: ""
    //     };
    // },
    //
    // componentDidMount: function() {
    //     this.getAnnouncements();
    // },
    //
    // getAnnouncements: function() {
    //     helpers.getAnnouncements().then(function(response) {
    //
    //     }.bind(this));
    // },

    render: function() {
        return (
            <div>
                <p>View announcements here</p>
            </div>
        );
    }
});

module.exports = AnnouncementsView;
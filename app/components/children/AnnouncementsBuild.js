var React = require("react");
var helpers = require("../utils/helpers");

var AnnouncementsBuild = React.createClass({
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
    //
    // addAnnouncements: function() {
    //     helpers.addAnnouncements(this.state.title, this.state.content).then(function(response) {
    //
    //     }.bind(this));
    //     Materialize.toast('Announcement added', 3000);
    //     this.getAnnouncements();
    // },

    render: function() {
        return (
            <div>
                <p>Build announcements here</p>
            </div>
        );
    }
});

module.exports = AnnouncementsBuild;
var React = require("react");
var helpers = require("../utils/helpers");
var ScheduleView =  require("./ScheduleView");
var AnnouncementsBuild =  require("./AnnouncementsBuild");

var ManagerHome = React.createClass({
    render: function() {
        return (
            <div>
                <ScheduleView />
                <div className="divider"></div>
                <AnnouncementsBuild />
            </div>
        );
    }
});

module.exports = ManagerHome;
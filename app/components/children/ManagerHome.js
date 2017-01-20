var React = require("react");
var helpers = require("../utils/helpers");
var ScheduleView =  require("./ScheduleView");
var AnnouncementsBuild =  require("./AnnouncementsBuild");
var AnnouncementsView =  require("./AnnouncementsView");

var ManagerHome = React.createClass({
    render: function() {
        return (
            <div>
                <ScheduleView />
                    <div className="row">
                        <div className="col m6">
                            <AnnouncementsView />
                        </div>
                        <div className="col m6">
                            <AnnouncementsBuild />
                        </div>
                    </div>
                </div>
        );
    }
});

module.exports = ManagerHome;
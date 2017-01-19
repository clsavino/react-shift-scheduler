var React = require("react");
var helpers = require("../utils/helpers");

var AnnouncementsBuild = React.createClass({
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

    getAnnouncements: function() {
        helpers.getAnnouncements().then(function(response) {

        }.bind(this));
    },

    handleAnnouncementBuild(event) {
       this.setState({ [event.target.id]: event.target.value});
    },

    addAnnouncements: function() {
        console.log("title:", this.state.title);
        console.log("content:", this.state.content);
        helpers.addAnnouncements(this.state.title, this.state.content).then(function(response) {

        }.bind(this));
        Materialize.toast('Announcement added', 3000);
        this.getAnnouncements();
    },

    render: function() {
        return (
          <div className="section">
            <div id="announcementBuilder" className="card">
              <div className="section">
                <div className="row">
                  <div className="col s12">
                    <h5>Announcement Builder</h5>
                  </div>
                </div>
                <div className="row">
                  <div id="inputTitle" className="input-field col s12">
                      <input
                          id="title"
                          type="text"
                          className="validate"
                          onChange={this.handleAnnouncementBuild}
                          required />
                      <label for="title">Title</label>
                  </div>
                  <div className="col s2">
                  </div>
                </div>
                <div className="row">
                  <div id="textareaBody" className="input-field col s12">
                    <textarea
                      id="content"
                      type="text"
                      className="materialize-textarea announcementForm"
                      onChange={this.handleAnnouncementBuild}>
                    </textarea>
                    <label for="body">Annoucement Body</label>
                  </div>
                </div>
                <div className="row">
                  {/* <div className="col s4">
                    <a id="hideButton" className="waves-effect waves-light btn red accent-3" onClick={this.displayBuilder}>Hide Builder</a>
                  </div> */}
                  <div className="col s4 offset-s8">
                    <a id="announcementSubmit" className="waves-effect waves-light btn green accent-3" onClick={this.addAnnouncements}>Submit New Announcement</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
});

module.exports = AnnouncementsBuild;

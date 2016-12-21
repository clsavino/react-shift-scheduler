var React = require("react");
var helpers = require("../utils/helpers");

var AddEmployee = React.createClass({

  getInitialState: function() {
    return { fullName: "", address: "", phone: "", email: "", ssn: "", availability: "" };
  },

  // deleteArticle: function(event) {
  //   event.preventDefault();
  //
  //   this.setState({ deletable: event.target.id });
  //
  //   helpers.deleteEmployee(event.target.id).then(function(response) {
  //     console.log("Deleted!")
  //   }.bind(this));
  // },

  handleName: function(event) {
    this.setState({ fullName: event.target.value });
  },
  handleAddress: function(event) {
    this.setState({ address: event.target.value });
  },
  handlePhone: function(event) {
    this.setState({ phone: event.target.value });
  },
  handleEmail: function(event) {
    this.setState({ email: event.target.value });
  },
  handleSSN: function(event) {
    this.setState({ ssn: event.target.value });
  },
  handleAvailability: function(event) {
    this.setState({ availability: event.target.value });
  },

  componentDidUpdate: function() {
    helpers.addEmployee(this.state.fullname, this.state.address, this.state.phone, this.state.email, this.state.ssn, this.state.availability).then(function(response) {
      console.log("helpers.addEmployee Returned!")
    }.bind(this));

  },



  handleForm: function(event) {
    event.preventDefault();

    this.setState({ fullName: "", address: "", phone: "", email: "", ssn: "", availability: "" });
  },
    render() {
      return (

        <div className="container">
          <div className="row">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s8 offset-s2">
                  <h3>Add an Employee!</h3>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s8 offset-s2">
                  <input
                    placeholder="John Smith"
                    id="full_name"
                    type="text"
                    className="validate"
                    value={this.state.fullName}
                    onChange={this.handleName}
                   />
                  <label for="full_name">Full Name</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s8 offset-s2">
                  <input
                    placeholder="5555 address road, Chapel Hill NC 55555"
                    id="address"
                    type="text"
                    className="validate"
                    value={this.state.address}
                    onChange={this.handleAddress}
                  />
                  <label for="address">Address</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s8 offset-s2">
                  <input
                    placeholder="(555) 555 - 5555"
                    id="phone"
                    type="text"
                    className="validate"
                    value={this.state.phone}
                    onChange={this.handlePhone}
                   />
                  <label for="phone">Phone</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s8 offset-s2">
                  <input
                    placeholder="johnsmith@gmail.com"
                    id="email" type="email"
                    className="validate"
                    value={this.state.email}
                    onChange={this.handleEmail}
                   />
                  <label for="email">Email</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s8 offset-s2">
                  <input
                    placeholder="555555555"
                    id="ssn"
                    type="text"
                    className="validate"
                    value={this.state.ssn}
                    onChange={this.handleSSN}
                  />
                  <label for="ssn">SSN</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s8 offset-s2">
                  <input
                    placeholder="Weekdays/Weekends/Monday - Friday"
                    id="availability"
                    type="text"
                    className="validate"
                    value={this.state.availability}
                    onChange={this.handleAvailability}
                   />
                  <label for="availability">Availability</label>
                </div>
              </div>
              <div className="row">
                <div className="col s8 offset-s2">
                  <button className="btn waves-effect waves-light" onClick={this.handleForm}>Submit
                    <i className="material-icons right">send</i>
                  </button>
                </div>
              </div>

            </form>
          </div>
        </div>
      );
    }
  });

module.exports = AddEmployee;

var React = require("react");

var Login = React.createClass({
handleUserChange: function(event) {
   this.setState({username: event.target.value});
},
handlePasswordChange: function(event) {
   this.setState({password: event.target.value});
},
handleLogin: function(event) {
    console.log("Username: " + this.state.username);
    console.log("Password: " + this.state.password);
    event.preventDefault();
},
    render() {
      return (
        <div className="container">
          <form onSubmit={this.handleLogin}>
            <h4 id="spacing">Login</h4>
            <label> User Name: </label>
              <input type="text" className="validate" name ="username" onChange={this.handleUserChange} />
            <label>Password: </label>
              <input type="password" className="validate" name="password" onChange={this.handlePasswordChange} />
            <button className="btn waves-effect waves-light btn-large" type="submit" value="Submit" name="action">Submit
            <i className="material-icons right">send</i>
            </button>
          </form>
        </div>
      );
    }
  });

module.exports = Login;

var React = require("react");

class Register extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
      email:"",
      passwordConfirmation:""
    }

    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleUserChange(event) {
     this.setState({ [event.target.name]: event.target.value});
  }

  handleLogin() {
      // event.preventDefault();
  }
    render() {
      return (
        <div className="container">
            <div className="row" id="loginForm">
                <div className="col m8 offset-m2">
                    <div className="card-panel">
                        <div className="row grey lighten-5">
                            <div className="col s12 center">
                                <h4 className="blue-text text-darken-1">Register</h4>
                            </div>
                        </div>
                        <form action="/register" method="POST" onSubmit={this.handleLogin}>
                            <div className="row">
                                <div className="col s12">
                                    <input
                                        placeholder="Username"
                                        type="text"
                                        className="validate"
                                        value={this.state.username}
                                        name="username"
                                        onChange={this.handleUserChange}
                                        required />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s12">
                                    <input
                                        placeholder="Email"
                                        type="email"
                                        className="validate"
                                        value={this.state.email}
                                        name="email"
                                        onChange={this.handleUserChange}
                                        required />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s12">
                                    <input
                                        placeholder="Password"
                                        type="password"
                                        className="validate"
                                        value={this.state.password}
                                        name="password"
                                        onChange={this.handleUserChange}
                                        required />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s12">
                                    <input
                                        placeholder="Confirm Password"
                                        type="password"
                                        className="validate"
                                        value={this.state.passwordConfirmation}
                                        name="passwordConfirmation"
                                        onChange={this.handleUserChange}
                                        required />
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <select name="userType">
                                        <option defaultValue="" disabled selected>Select User Type</option>
                                        <option value="employee">Employee</option>
                                        <option value="manager">Manager</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s12">
                                    <button id="registerButton" className="btn waves-effect waves-light btn-large blue accent-3" type="submit" value="Submit" name="action">Login<i className="material-icons right">send</i></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      );
    }
  };

  module.exports = Register;
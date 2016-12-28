var React = require("react");

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
    }
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleUserChange(event) {
     this.setState({ [event.target.name]: event.target.value});
  }

  handleLogin() {
      console.log("Username: " + this.state.username);
      console.log("Password: " + this.state.password);
      // event.preventDefault();
  }
    render() {
      return (
        <div className="row" id="loginForm">
            <div className="col m8 offset-m2">
                <div className="card-panel">
                    <form action="/login" method="POST" onSubmit={this.handleLogin}>
                        <div className="row">
                            <div className="col s12">
                                <input
                                    placeholder="Username"
                                    type="text"
                                    className="validate"
                                    value={this.state.username}
                                    name="username"
                                    onChange={this.handleUserChange} />
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
                                    onChange={this.handleUserChange} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col m6 s12 center">
                                <button id="loginButton" className="btn waves-effect waves-light btn-large blue accent-3" type="submit" value="Submit" name="action">Login<i className="material-icons right">send</i></button>
                            </div>
                            <div className="col m6 s12 center">
                                <a id="registerButton" className="btn waves-effect waves-light btn-large green accent-3" href="#/register">Register<i className="material-icons right">person_add</i></a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      );
    }
  };

module.exports = Login;
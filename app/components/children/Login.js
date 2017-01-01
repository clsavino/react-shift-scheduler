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
        <div className="container">
            <div className="row" id="loginForm">
                <div className="col m8 offset-m2">
                    <div className="card-panel">
                        <div className="row grey lighten-5">
                            <div className="col s12 center">
                                <h4 className="blue-text text-darken-1"><img id="logo" src="assets/images/logo.png"/><span className="hide-on-med-and-down">Schedulr</span></h4>
                            </div>
                        </div>
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
                                <div className="col m4 s12 left">
                                    <button className="btn waves-effect waves-light btn-large blue accent-3 loginButtons left" type="submit" value="Submit" name="action">Login<i className="material-icons right">send</i></button>
                                </div>
                                <div className="col m4 s12 center">
                                    <a className="btn waves-effect waves-light btn-large green accent-3 loginButtons center" href="#/register">Register<i className="material-icons right">person_add</i></a>
                                </div>
                                <div className="col m4 s12 right">
                                    <a className="btn waves-effect waves-light btn-large red accent-3 loginButtons right" href="#/logout">Logut<i className="material-icons right">exit_to_app</i></a>
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

module.exports = Login;
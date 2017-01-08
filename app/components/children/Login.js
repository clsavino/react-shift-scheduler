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
      // just in case we need it
  }
    render() {
      return (
        <div className="container">
            <div className="row" id="loginForm">
                <div className="col m8 offset-m2">
                    <div className="card-panel">
                        <div className="row grey lighten-5">
                            <div className="col s12 center">
                                <h4 className="blue-text text-darken-1"><img id="logo" src="/assets/images/logo.png"/><span className="hide-on-med-and-down">Schedulr</span></h4>
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
                                <div className="col m6 s12 left">
                                    <button className="btn waves-effect waves-light btn-large blue accent-3 loginButtons left" type="submit" value="Submit" name="action">Login<i className="material-icons right">send</i></button>
                                </div>
                                <div className="col m6 s12 right">
                                    <a className="btn waves-effect waves-light btn-large green accent-3 loginButtons center" href="/register">Register<i className="material-icons right">person_add</i></a>
                                </div>
                            </div>
                            <div className="row">
                                <div className ="col m12 s12">
                                    <h6 id="spaceSocial"> Or login with:</h6>
                                </div>
                                <div className="col m6 s4">
                                    <a id="google" className="btn waves-effect waves-light btn-large loginButtons" href="/auth/google"><i className="fa fa-google left" aria-hidden="true"></i>Google</a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col m6 s4">
                                    <a id="linkedin" className="btn waves-effect waves-light btn-large loginButtons" href="/auth/google"><i className="fa fa-linkedin left" aria-hidden="true"></i>LinkedIn</a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col m6 s4">
                                    <a id="twitter" className="btn waves-effect waves-light btn-large loginButtons" href="/auth/google"><i className="fa fa-twitter left" aria-hidden="true"></i>Twitter</a>
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
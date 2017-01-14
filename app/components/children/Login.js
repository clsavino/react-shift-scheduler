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
                <div className="col m6 offset-m3 s12">
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
                                <div className="col s12">
                                    <button className="btn waves-effect waves-light btn-large blue accent-3 loginButtons" type="submit" value="Submit" name="action">Login<i className="material-icons right">send</i></button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s12">
                                    <h6>Or login with</h6>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s6">
                                    <a id="google" className="btn waves-effect waves-light btn-large loginButtons" href="/auth/google"><i className="fa fa-google"></i></a>
                                </div>
                                <div className="col s6">
                                    <a id="linkedin" className="btn waves-effect waves-light btn-large loginButtons" href="/auth/linkedin"><i className="fa fa-linkedin"></i></a>
                                </div>
                            </div>
                            <div className="divider"></div>
                            <div className="row">
                                <div className="col s12">
                                    <h6 id="noAccount">Don't have an account?</h6>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col s12">
                                    <a className="btn waves-effect waves-light btn-large green accent-3 loginButtons" href="/register">Register<i className="material-icons right">person_add</i></a>
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
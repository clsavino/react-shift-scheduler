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

  handleLogin(event) {
      console.log("Username: " + this.state.username);
      console.log("Password: " + this.state.password);
      event.preventDefault();
  }
    render() {
      return (
        <div className="container">
          <form onSubmit={this.handleLogin}>
            <h4 id="spacing">Login</h4>
            <label> User Name: </label>
              <input type="text" className="validate" 
                value={this.state.username} 
                name="username" 
                onChange={this.handleUserChange} />

            <label>Password: </label>
              <input type="password" className="validate" 
                value={this.state.password} 
                name="password" 
                onChange={this.handleUserChange} />

            <button className="btn waves-effect waves-light btn-large" type="submit" value="Submit" name="action">Submit
            <i className="material-icons right">send</i>
            </button>
          </form>
        </div>
      );
    }
  };

module.exports = Login;

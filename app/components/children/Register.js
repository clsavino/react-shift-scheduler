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
      console.log("Username: " + this.state.username);
      console.log("Email: " + this.state.email);
      console.log("Password: " + this.state.password);
      console.log("Password Confirmation: " + this.state.passwordConfirmation);
      // event.preventDefault();
  }
    render() {
      return (
        <div className="container">
          <form action="/register" method="POST" onSubmit={this.handleLogin}>
            <h4 id="spacing">Register</h4>
            <label> Username: </label>
              <input type="text" className="validate" 
                value={this.state.username} 
                name="username" 
                // errorText={errors.username}
                onChange={this.handleUserChange} />


            <label>Email: </label>
              <input type="text" className="validate" 
                value={this.state.email} 
                name="email"
                // errorText={errors.email} 
                onChange={this.handleUserChange} />

            <label>Password: </label>
              <input type="password" className="validate" 
                value={this.state.password} 
                name="password"
                // errorText={errors.password} 
                onChange={this.handleUserChange} />

            <label>Password Confirmation: </label>
              <input type="password" className="validate" 
                value={this.state.passwordConfirmation} 
                name="passwordConfirmation" 
                // errorText={errors.passwordConfirmation} 
                onChange={this.handleUserChange} />

            <button className="btn waves-effect waves-light btn-large" type="submit" value="Submit" name="action">Submit
            <i className="material-icons right">send</i>
            </button>
          </form>
        </div>
      );
    }
  };

  module.exports = Register;
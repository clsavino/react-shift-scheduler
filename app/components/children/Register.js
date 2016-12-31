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
          <form action="/register" method="POST" onSubmit={this.handleLogin}>
            <h4 id="spacing">Register</h4>
            <label for="username"> Username: </label>
              <input type="text" className="validate" 
                value={this.state.username} 
                name="username" 
                id="username"
                // errorText={errors.username}
                onChange={this.handleUserChange}
                required />


            <label>Email: </label>
              <input for="email" 
                type="email" 
                className="validate" 
                value={this.state.email} 
                name="email"
                // errorText={errors.email} 
                onChange={this.handleUserChange}
                required />

            <label>Password: </label>
              <input for="password"
                type="password" 
                className="validate" 
                value={this.state.password} 
                name="password"
                // errorText={errors.password} 
                onChange={this.handleUserChange}
                required />

            <label>Password Confirmation: </label>
              <input for="passwordConfirmation" type="password" className="validate" 
                value={this.state.passwordConfirmation} 
                name="passwordConfirmation" 
                // errorText={errors.passwordConfirmation} 
                onChange={this.handleUserChange}
                required />

            <div className="input-field col s12">
              <select name="userType">
                <option defaultValue="" disabled selected>Choose your option</option>
                <option value="employee">Employee</option>
                <option value="manager">Manager</option>
              </select>
              <label>Select User Type</label>
            </div>
               
            <button className="btn waves-effect waves-light btn-large blue accent-3" type="submit" value="Submit" name="action">Submit
            <i className="material-icons right">send</i>
            </button>
          </form>
        </div>
      );
    }
  };

  module.exports = Register;
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/App.css';

// API
import  {login}  from "../api/users.js"

class Login extends React.Component {
	state={
		user:"",
		pass:"",
		name:"",
	};

	// TODO If you can figure uot a way to only require one function for this, tell me.
	handleUser = event =>{
		this.setState({ user: event.target.value})
	}

	handlePass = event =>{
		this.setState({ pass: event.target.value})
	}

	handleSubmit = event =>{
		event.preventDefault()
		// Form checking the username/password
		// Checking if user is in database
		login(this.state.user, this.state.pass)
			.then( res => { 
				// If user is found
				if(res != null){
					this.userid=res._id;
					this.props.setID(res._id)
					this.setState({ user: "", pass:"", name:""})
				}
				else{
					alert("ERROR: Please your Username or Password are incorrect");
				}

			})
			.catch( err =>{
			})

		// Error messages start ehre
	}

	render(){
		return (
			<div>

				<h1> Enter your username/password</h1>

				<form onSubmit={this.handleSubmit}>

					<label>Username</label><br/>
					<input required type="text" id="user" name="user" value={this.state.user} pattern="[A-za-z0-9]+" maxLength="20" minLength="4"  onChange={this.handleUser}  /><br/>

					<label>Password</label><br/>
					<input required type={"password"} id="pass" name="pass" maxLength="20" minLength="4" value={this.state.pass} onChange={this.handlePass} /><br/>

					<input type="submit" value="Login" onChange={this.handleSubmit}/>
				</form>

			</div>
		);
	}
}

export default Login;

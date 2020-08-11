import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/App.css';

// API
import  {newUser, getUser}  from "../api/users.js"

class Signup extends React.Component{
	state={
		id:null,
		user:"",
		pass:"",
		name:""
	};
	// TODO If you can figure uot a way to only require one function for this, tell me.
	handleUser = event =>{
		this.setState({ user: event.target.value})
	}
	handleName = event =>{
		this.setState({ name: event.target.value})
	}

	handlePass = event =>{
		this.setState({ pass: event.target.value})
	}

	handleSubmit = event =>{
		event.preventDefault()
		// Form checking the username/password
				// Checking if user is in database
				getUser(this.state.user)
					.then( res => { 
						if(res == null){
							alert("Adding user")
							newUser(this.state.name, this.state.user, this.state.pass)
								.then(res => {
									this.setState({ user: "", pass:"", name:""})
								})
								.catch(err => {
									this.setState({ user: "", pass:"", name:""})
								})
						}
						else{
							alert("User is already in database dumbass")
						}

					})
					.catch( err =>{
					})

			// Error messages start ehre
		}



	render(){
		return (
			<div>

				<h1> Make a username/password</h1>
				<form onSubmit={this.handleSubmit}>

					<label>Username</label><br/>
					<input required type="text" id="user" name="user" value={this.state.user} pattern="[A-za-z0-9]+" maxlength="20" minlength="4"  onChange={this.handleUser}  /><br/>

					<label>Password</label><br/>
					<input required type={"password"} id="pass" name="pass" maxlength="20" minlength="4" value={this.state.pass} onChange={this.handlePass} /><br/>

					<label>Name</label><br/>
					<input required type="text" id="Name" name="Name" value={this.state.name} onChange={this.handleName} /><br/>

					<input type="submit" value="Submit" onChange={this.handleSubmit}/>
				</form>

			</div>
		);
	}
}

export default Signup;

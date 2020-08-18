// The index page basically
import React, { Component } from 'react';
//This ensrues app.css overwrites bootstrap
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect

} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/App.css';



// Import components from other pages
import Signup from "./Pages/Sign_up.js"
import Login from "./Pages/Log_in.js"
import Chatroom from "./Pages/Chatroom.js"

import "./CSS/NavBar.css"

const Home = () =>{
	return (
		<div>
			<h1> Jojo </h1>
			<h2> By ZA/AZ </h2>
		</div>
	);
}


export default class App extends React.Component {

	state = {
		userid: null,
	};

	userLoginLinks = () =>{
		if ( this.state.userid != null){
			return(
				<div>
				<Redirect to="/Chatroom" />
					<li> <Link to="/Chatroom">Global Chat</Link> </li>
				</div>
			);
		}
		else{
			return(
				<div>
					<li> <Link to="/Sign_up">Sign Up</Link> </li>
					<li> <Link to="/Log_in">Log In</Link> </li>
				</div>
			);
		}
	}

	getUserID = (_id) =>{
		this.setState({userid: _id})

	};

render(){
	return (
		<div id="navbar">
			<Router>
				<ul >
					<li> <Link to="/">Home</Link> </li>
					{this.userLoginLinks()}

				</ul>

				<Switch>
					<Route exact path="/"> <Home /> </Route> 
					<Route path="/Sign_up"> <Signup /> </Route>
					<Route path="/Log_in"> <Login setID={this.getUserID}/> </Route>
					<Route path="/Chatroom"> <Chatroom /> </Route>
				</Switch>
			</Router>
		</div>

	);
}
}





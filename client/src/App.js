// The index page basically
import React, { Component } from 'react';
//This ensrues app.css overwrites bootstrap
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/App.css';



// Import components from other pages
import Signup from "./Pages/Sign_up.js"
import Login from "./Pages/Log_in.js"

import "./CSS/NavBar.css"

const Home = () =>{
	return (
		<div>
			<h1> Jojo shitposting </h1>
			<h2> By ZA/AZ </h2>
		</div>
	);
}

export default function App(){
	return (
		<div id="navbar">
			<Router>
				<ul >
					<li> <Link to="/">Home</Link> </li>
					<li> <Link to="/Sign_up">Sign Up</Link> </li>
					<li> <Link to="/Log_in">Log In</Link> </li>
				</ul>

				<Switch>
					<Route exact path="/"> <Home /> </Route> 
					<Route path="/Sign_up"> <Signup /> </Route>
					<Route path="/Log_in"> <Login /> </Route>
				</Switch>
			</Router>
		</div>

	);
}





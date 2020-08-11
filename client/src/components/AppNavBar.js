import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";



// Import components from other pages
import Signup from "../Sign_up.js"
import Login from "../Log_in.js"

import "../CSS/NavBar.css"

const Home = () =>{
	return (
		<div>
			<h1> Megadeth Appericatoin </h1>
			<h2> By ZA/KI </h2>
		</div>
	);
}

const NavBar = () =>{
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

export default NavBar;



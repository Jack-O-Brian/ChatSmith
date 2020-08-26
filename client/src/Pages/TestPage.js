// Tutoiral page on api calls
// TODO This page should be removed from production
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/App.css';
import '../CSS/Chatroom.css';
import {listChatrooms, newChatroom, addUserUrl, rmuser, chmoduser, appmsg, userlist, chatlist, rmchatroom} from '../api/chatroom.js'


export default class Test extends React.Component {
	state={
		Field1:"",
		Field2:"",
		Field3:"",
		Choice:null
	};

	// This is just a demonstration of how to use API calls
	//Everything is split into two types: get requests, and post rqeusts
	//all post rqeusts follow the format of add user. 

	handleSubmit = event =>{
		event.preventDefault()
// Big fucking switch statemnt
		switch (this.state.Choice) {
			case "listChatrooms":
				listChatrooms().then( res =>(console.log(res)));
				break;
			case "newchatroom":
				if ( this.state.Field1=="" || this.state.Field2=="")
					alert ("this.state.Field 1 and field 2 is invalid")
				else{
					newChatroom(this.state.Field1, this.state.Field2)
						.then( res => console.log(res))
						.catch(err => console.log(err));
				}

				break;
			case "addUser":
				if ( this.state.Field1=="" || this.state.Field2=="")
					alert ("this.state.Field 1 and field 2 is invalid")
				else{
					addUserUrl(this.state.Field1, this.state.Field2)
						.then( res => console.log(res))
						.catch(err => console.log(err));
				}
				break;

			default:
				console.log(this.state.Choice)
				console.log("Brah yhou picked nothin");
		}
	}

	handleChange = event =>{
		console.log(event.target.value)
		this.setState({ [event.target.name]:event.target.value})
	}


	render(){
		return (
			<div>

				<h1> Enter your username/password</h1>

				<form onSubmit={this.handleSubmit}>

					<label>Field 1 </label><br/>
					<input  type="text" id="Field1" name="Field1" value={this.state.Field1} onChange={this.handleChange}  /><br/>

					<label>Field 2 </label><br/>
					<input  type="text" id="Field2" name="Field2" value={this.state.Field2} onChange={this.handleChange}  /><br/>

					<label>Field 3 </label><br/>
					<input  type="text" id="Field3" name="Field3" value={this.state.Field3} onChange={this.handleChange}  /><br/>

					<select name="Choice" value={this.state.Choice}  onChange={this.handleChange} >
						<option selected value="listChatrooms">List all chatrooms</option>
						<option value="newchatroom">Add a new chatroom</option>
						<option value="addUser">Add a new user by url</option>
						<option value="mango">Mango</option>
					</select>

					<input type="submit" value="Login" onChange={this.handleSubmit}/>
				</form>

			</div>
		);
	}
}


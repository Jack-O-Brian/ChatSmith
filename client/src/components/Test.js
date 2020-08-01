import React, { Component } from 'react';
import {  Button } from 'reactstrap';

import axios from 'axios'

class Test extends Component{


	state= {
		name: 'baby'
	}

	render(){
		return(
			<Button
			onClick={() =>{
				// const message = prompt("Message to send to server");
				axios.get('http://localhost:4200/api/users/') 
					.then(res =>{
						this.setState ({name: res.data[0].name});
					})
					.catch(err =>{
						this.setState ({name: "FUCK"});
						console.log(err);
					});


			}
			}>

			{this.state.name} </Button>
		);
	}


}



class Test2 extends Component{
	state={
		status: 'waiting'
	}
	meme = () => {
		const json = {
			name: "DIO",
			user: "D4C",
			pass: "chicken"
		}
		console.log("SATAN");
		axios.post("http://localhost:4200/api/users/new", json, {
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then((test) =>{
				this.setState({status:"Success"})
			})
			.catch((err) => {
				this.setState({status:"Failure"});
				;}   );

	}
	render(){
		return(
			<Button onClick={() => this.meme() } > {this.state.status} </Button>);
		//


	}
}

export {
	Test, Test2
}

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
				console.log("DoG eat dog");
				axios.get('http://localhost:3000/api/users/') 
					.then(res =>{
						this.setState ({name: "jojo"});
						console.log(res.data[0].name);
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


export default Test;

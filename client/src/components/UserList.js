import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {v1 as uuid} from "uuid";


class UserReact extends Component {
	state = {
		users: [
			{ id: uuid(), name: 'Zaki', username: 'D4C'  },
			{ id: uuid(), name: 'Haroun', username: 'Ragalah'  },
			{ id: uuid(), name: 'Rae', username: 'rdizzle420'  },
			{ id: uuid(), name: 'Issa', username: 'JustinBeaver'  }
		]
	}

	render(){
		const { users } = this.state;
		return (
			<Container>
			<Button 
				onClick={() =>{
					const name = prompt("Enter Name");
					const username = prompt("Enter usernamee");
					if( name && username){
						this.setState(state => ({
							users: [...state.users, {id : uuid(), name, username}]
						}));

					}
			}}>
			Add Item </Button>	

			  <ListGroup>
				<TransitionGroup className="userList">
				{users.map(({ id, name, username }) => (
					<CSSTransition key={id} tiemout={500} classNames="fade">
						<ListGroupItem>
						<Button className="remove-btn"
						color="danger"
						onClick={() => {
							this.setState(state => ({
								users: state.users.filter(user => user.id !== id)
							}));
						}}> &times; </Button>
						{"Username:"+username}
						{"Name:" + name}
						</ListGroupItem>
					</CSSTransition>

				))}
				</TransitionGroup>
			  </ListGroup>


			</Container>
		);


	}
	
}

export default UserReact;

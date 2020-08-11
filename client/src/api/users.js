import axios from 'axios'

// API Calls
// Replace this with your server.
let url="http://localhost:4200/api/users/" 

export function listUsers(){
	return new Promise(( resolve, reject) =>{
		axios.get(url).then( (res) => { resolve(res.data)})
			.catch( () => { reject()})


	})
}

export function getUser(user){
	return new Promise(( resolve, reject) =>{
		axios.get(url+"get/?user="+user).then( (res) => {
			resolve(res.data)
		})
			.catch( () => { reject()})


	})
}

export function login(user,pass){
	return new Promise(( resolve, reject) =>{
		axios.get(url+"login/?user="+user+"&pass="+pass).then( (res) => {
			resolve(res.data)
		})
			.catch( () => { reject()})


	})
}


export function deleteUser(id){
	return new Promise(( resolve, reject) =>{
		axios.post(url+"delete/"+id)
			.then( (res) => {
				resolve();
			})
			.catch( (err) => {
				reject();
			})
	})

}

export  function newUser(name, username, password){
	const json={
		"name": name,
		"user": username,
		"pass": password
	}

	return new Promise(( resolve, reject) =>{
		axios.post(url+"new", json,{
			headers:{ 'Content-Type': 'application/json' }
		})
			.then( (res) => {
				resolve(res)
			})
			.catch( () => { 
				reject()
			})


	})

}

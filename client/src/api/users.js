import axios from 'axios'

// API Calls
// Replace this with your server.

let url="http://localhost:4200/api/users/" 
export function getUsers(){
	return new Promise(( resolve, reject) =>{
		axios.get(url).then( (res) => { resolve(res.data)})
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
		}).then( () => { resolve()})
			.catch( () => { reject()})


	})

}

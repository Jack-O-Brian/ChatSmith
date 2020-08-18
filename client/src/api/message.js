import axios from 'axios'

// API Calls
// Replace this with your server.
let url="http://localhost:4200/api/message/" 

export function listUsers(){
	return new Promise(( resolve, reject) =>{
		axios.get(url).then( (res) => { resolve(res.data)})
			.catch( () => { reject()})


	})
}


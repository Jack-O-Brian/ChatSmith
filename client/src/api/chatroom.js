import axios from 'axios'

// API Calls
// Replace this with your server.
let url="http://localhost:4200/api/chatroom/" 

export function listChatrooms(){
	return new Promise(( resolve, reject) =>{
		axios.get(url).then( (res) => { resolve(res.data)})
			.catch( () => { reject()})


	})
}

export function newChatroom(name, user){
	return new Promise( (resolve, reject) =>{
		const json={
			"name":name,
			"user":user
		}
		axios.post(url+"new", json,{
			headers:{ 'Content-Type': 'application/json' }
		})
			.then( (res) => { resolve (res)})
			.catch( (res) => { reject (res)})
	})
}


export function addUserUrl(URL, user){
	return new Promise( (resolve, reject) =>{
		const json={
			"url":URL,
			"user":user
		}
		axios.post(url+"addurl", json,{
			headers:{ 'Content-Type': 'application/json' }
		})
			.then( (res) => { resolve (res)})
			.catch( (res) => { reject (res)})
	})
}

export function rmuser(id, user){
	return new Promise( (resolve, reject) =>{
		const json={
			"_id":id,
			"user":user
		}
		axios.post(url+"rmuser", json,{
			headers:{ 'Content-Type': 'application/json' }
		})
			.then( (res) => { resolve (res)})
			.catch( (res) => { reject (res)})
	})
}


export function chmoduser(id, user, level){
	return new Promise( (resolve, reject) =>{
		const json={
			"_id":id,
			"user":user,
			"level":level
		}
		axios.post(url+"chmoduser", json,{
			headers:{ 'Content-Type': 'application/json' }
		})
			.then( (res) => { resolve (res)})
			.catch( (res) => { reject (res)})
	})
}

export function appmsg(user, id, text){
	return new Promise( (resolve, reject) =>{
		const json={
			"_id":id,
			"user":user,
			"text":text
		}
		axios.post(url+"appmsg", json,{
			headers:{ 'Content-Type': 'application/json' }
		})
			.then( (res) => { resolve (res)})
			.catch( (res) => { reject (res)})
	})
}


export function userlist(chatroom){
	return new Promise( (resolve, reject) =>{
		const json={
			"id":chatroom
		}
		axios.get(url+"userlist", json,{
			headers:{ 'Content-Type': 'application/json' }
		})
			.then( (res) => { resolve (res)})
			.catch( (res) => { reject (res)})
	})
}



export function chatlist(chatroom){
	return new Promise( (resolve, reject) =>{
		const json={
			"id":chatroom
		}
		axios.get(url+"chatlist", json,{
			headers:{ 'Content-Type': 'application/json' }
		})
			.then( (res) => { resolve (res)})
			.catch( (res) => { reject (res)})
	})
}

export function rmchatroom(chatroom){
	return new Promise( (resolve, reject) =>{
		const json={
			"id":chatroom
		}
		axios.get(url+"rmchatroom", json,{
			headers:{ 'Content-Type': 'application/json' }
		})
			.then( (res) => { resolve (res)})
			.catch( (res) => { reject (res)})
	})
}

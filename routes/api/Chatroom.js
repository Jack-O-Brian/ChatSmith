const express = require('express');
const router = express.Router();


// JP means json paremters
//
const mongoose = require('mongoose');

// Chatroom model
const Chatroom = require('../../model/Chatroom.js')

//Consts
// Because roles are rperensted as strings, here's the variables for it so we don't misspell it.
var Reg="Regular";
var Owner="Owner"
var Admin="Admin";
// Routesk
// @route GET api/Chatroom
// @desc Get all Chatroom
// @access publc
router.get('/', (req,res)=>{
	Chatroom.find()
		.then(Chatroom => res.json(Chatroom))

});

// Returns a new random url to be associated with a page
// It's a function becasue we will change it in the future
function newUrl(){
	return "http://localhost:4200/chatroom/rnd="+new Date().getTime()
}


// @route POST api/chatroom/new
// @desc Enter a new chatroom by name, and user creating it
// @access private
// @usage json paramters name and user (user is a user in database)
router.post('/new', (req,res)=>{
	const newRoom = new Chatroom({
		name: req.body.name,
		url: newUrl(),
		user_list:[{
			username: req.body.user,
			role:Owner
		}],
		Message_list:[{
		}]
	})
	newRoom.save().then(room => res.json(room))
		.catch(err => res.status(404).json({success:false}));
});


// @route POST api/chatroom/addurl
// @desc Add a user to a chatroom using url
// @usage json paremters of user/url
router.post("/addurl", (req, res)=>{
	console.log("YOUR");
	Chatroom.find({url:req.body.url})
		.then( chatroom => { 
			Chatroom.updateOne(
				{"url": req.body.url},
				{
					"$push":{
						"user_list":{
							"username":req.body.user,
							"role":Reg
						}
					}
				})
				.then(wow => {console.log(wow)})
			Chatroom.findOne({"url": req.body.url})
				.then( room => res.status(200).json(room))


		})
		.catch(err => 
			{
				console.log(err)
				res.status(404).json({success:false})
			});
});

// @route post rmuser
// @desc remove a user form a chatroom  
// @usage json apremters of user and the chatroom's id
router.post("/rmuser", (req, res)=>{
	Chatroom.find({_id:req.body._id})
		.then( chatroom =>{
			Chatroom.updateOne(
				{"_id": req.body._id},
				{"$pull":{
					"user_list":{
						"username":req.body.user
					}
				}})
				.then(room => res.status(202).json(room))
		})
		.catch( () =>{
			res.status(404).json({success:false})
		})
});


// @route post chmoduser
// @desc Change user's previliages 
// @usage json paremters of user, chatorom's id and level
router.post("/chmoduser", (req, res)=>{

	var user={
		"username":req.body.user,
		"role": req.body.level
	};
	Chatroom.updateOne(
		{_id:req.body._id,"user_list.username":req.body.user} ,
		{
			$set: { "user_list.$": user}
		})
		.then( chatroom => res.status(200).json({chatroom}))
		.catch( err =>{
			console.log(err)
			res.status(404).json({err})
		})


});

// @desc Append a new message to a chatroom 
// @usage JP of user, chatroom's id and text
router.post("/appmsg", (req, res)=>{

	Chatroom.updateOne({_id:req.body.id},
		{
			"$push":{
				"Message_list":{
					username:req.body.user,
					message_text:req.body.text
				}
			}
		}
	)
		.then( chatroom => {
			console.log(req.body.id)
			console.log(req.body.user)
			console.log(req.body.text)
			res.status(200).json({chatroom})
		})
		.catch(err => {
			console.log(err);
			res.status(404).json({err})
		})


});

// @desc Get the users in the current chatroom 
// @usage JP of chatroom id
router.get("/userlist", (req, res)=>{
	Chatroom.find({_id:req.body.id})
		.then ( room => {
			res.status(200).json(room[0].user_list)
		})

		.catch ( () => {
			console.log("FUKC")
			res.status(404).json({success:false})
		})


});

// @desc Get the messages in the current chatroom 
// @usage JP of chatroom id
// FIXME there may be an issue, of messages coming in out of order.
router.get("/chatlist", (req, res)=>{
	Chatroom.find({_id:req.body.id},
	).sort('+date')
		.then ( room => {
			res.status(200).json(room[0].Message_list)
		})

		.catch ( () => {
			res.status(404).json({success:false})
		})


});

// @route post 
// @desc remove a chatroom
// @usage JP  the chatroom's id 
router.post("/rmchatroom", (req, res)=>{
	Chatroom.deleteOne({_id:req.body.id})
		.then(room => res.status(202).json(room))
		.catch( err =>{
			console.log(err)
			res.status(404).json({success:false})
		})
});


module.exports = router;

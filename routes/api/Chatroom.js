const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

// Chatroom model
const Chatroom = require('../../model/Chatroom.js')


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
		user_list:{
			user: { username: req.body.user, role:"Owner"}
		},
		Message_list:{
			Message:{
				username:null,
				message_text:null,
				date:null
			}
		}
	})
	newRoom.save().then(room => res.json(room))
		.catch(err => res.status(404).json({success:false}));
});


// @route POST api/chatroom/addurl
// @desc Add a user to a chatroom using url
// @usage json paremters of name/url
router.post("/addurl", (req, res)=>{
	Chatroom.find({url:req.body.url})
		.then( chatroom => { 
			res.status(202).json({success:true})
		})
		.catch(err => res.status(404).json({success:false}));
});
module.exports = router;

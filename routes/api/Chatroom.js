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

router.post('/new/:name', (req,res)=>{
	const newRoom = new Chatroom({

	});
});


module.exports = router;

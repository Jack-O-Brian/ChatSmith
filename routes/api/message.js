const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
// Message model
const Message = require('../../model/Message.js')


// @route GET api/message
// @desc Get all message
// @access publc
router.get('/', (req,res)=>{
	Message.find()
		.then(message => res.json(message))

});

// @route POST api/messages
// @desc Insert new message
// @access private
router.post('/new', (req,res)=>{
	if( req.body.text == "" || req.body.userid == "")
		res.json(404)
	const newmessage = new Message({
		text: req.body.text,
		userid: req.body.userid,
	});
	newmessage.save().then(message => res.json(message));
});

// @route POST api/messages
// @desc Delete message
// @access private
router.post('/delete/:id', (req,res)=>{
	message.findById(req.params.id)
		.then(message => message.remove()
			.then( () => res.json({success: true})))
		.catch(err => res.status(404).json({success:false}));
});

router.get("/user/:id", (req, res)=>{
	console.log ( mongoose.Types.ObjectId(req.params.id))
	Message.find({userid: mongoose.Types.ObjectId(req.params.id)})
		.then(message => res.json(message))
});





module.exports = router;



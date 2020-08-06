const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./User')

// Create message sceham
const MessageSchema = new Schema({
	text:{
		type: String,
		required: true
	},
	userid:{
		type: mongoose.Schema.Types.ObjectId,
		ref: "User"
	},
	date:{
		type: Date,
		default: Date.now
	}


});

module.exports = Message = mongoose.model('message', MessageSchema);

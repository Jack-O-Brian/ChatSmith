const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./User')

// Create message sceham
const ChatroomSchema = new Schema({
	message: {
		text:{
			type: String,
		},
		date:{
			type: Date,
		}
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

module.exports = Chatroom = mongoose.model('chatroom', ChatroomSchema);

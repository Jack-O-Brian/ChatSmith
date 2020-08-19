const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./User')

// Create message sceham
const ChatroomSchema = new Schema({
	Name: String,
	Url: String,
	user_list:{
		user:{
			username:{type: mongoose.Schema.Types.ObjectId, ref: "User"},
			role: String
		}
	},
	Message_list:{
		Message:{
			date:{
				type:Date,
				default: Date.now
			},
			username:{type: mongoose.Schema.Types.ObjectId, ref: "User"},
			message_text: String

		}

	}



});

module.exports = Chatroom = mongoose.model('chatroom', ChatroomSchema);

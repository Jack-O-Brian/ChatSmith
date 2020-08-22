const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create message sceham
const ChatroomSchema = new Schema({
	name: String,
	url: String,
	user_list:[{
		username:{type: mongoose.Schema.Types.ObjectId, ref: "User"},
		// username:String,
		role: String
	}],
	Message_list:[{
		date:{
			type:Date,
			default: Date.now
		},
		username:{type: mongoose.Schema.Types.ObjectId, ref: "User"},
		message_text: String

	}]



});

module.exports = Chatroom = mongoose.model('chatroom', ChatroomSchema);

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create user sceham
const UserSchema = new Schema({
	name:{
		type: String,
		required: true
	},
	user:{
		type: String,
		required: true
	},
	pass:{
		type: String,
		required: true
	},
	date:{
		type: Date,
		default: Date.now

	}


});

module.exports = User = mongoose.model('user', UserSchema);

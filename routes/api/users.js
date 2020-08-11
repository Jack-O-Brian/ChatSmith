const express = require('express');
const router = express.Router();

// User model
const User = require('../../model/User.js')


// @route GET api/user
// @desc Get all user
// @access publc
router.get('/', (req,res)=>{
	User.find()
		.then(user => res.json(user))

});




// @route POST api/users
// @desc Insert new user
// @access private
router.post('/new', (req,res)=>{
	const newUser = new User({
		name: req.body.name,
		user: req.body.user,
		pass: req.body.pass,
	});
	newUser.save().then(user => res.json(user));
});

// @route POST api/users
// @desc Delete user
// @access private
router.post('/delete/:id', (req,res)=>{
	User.findById(req.params.id)
		.then(user => user.remove()
			.then( () => res.json({success: true})))
		.catch(err => res.status(404).json({success:false}));
});




// @route Login api/users
// @desc Find a user by username/password
// @access private
// @usage use query parmas, like user=123?pass=123
router.get("/login/", (req, res)=>{
	User.findOne({"user": req.query.user, "pass": req.query.pass})
		.then( user => res.json(user))
});

// @route Get api/users
// @desc Find a user by username
// @access private
// @usage use query parmas, like user=123?pass=123
router.get("/get/", (req, res)=>{

	User.findOne({"user": req.query.user}).then( user => {
		temp ={ id:user.id, user: user.user}
		res.json(temp)
	})
		.catch(err => {

			res.status(200).json(null)
		}
		);
})




module.exports = router;



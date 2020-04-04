const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get( async (req, res) => {
	try{
		const users = await User.find();
		res.json(users);
	} catch(err) {
		res.status(400).json('Error: ' + err);
	}
	/* User.find()
		.then(users =>  res.json(users))
		.catch(err => res.statusCode(400).json('Error: ' + err)); */
});

router.route('/add').post( async (req,res) => {
	const username = req.body.username;
	const phone = Number(req.body.phone);
	const password = req.body.password;
	const date = Date.parse(req.body.date);

	const newUser = new User({
		username,
		phone,
		password,
		date,
	});

	try{
		const savedUser = await newUser.save();
		res.json({savedUser});
	}catch(err){
		res.status(400).json('Error: ' + err);
	}
	/* newUser.save()
		.then(() => res.json('User added!'))
		.catch(err => res.statusCode(400).json('Error: ' + err)); */

	router.route('/:id').get( async (req, res) => {
		try{
			const user = await User.findById(req.params.id);
			res.json(user);
		} catch(err) {
			res.status(400).json('Error: ' + err);
		}
		
			/*
			User.findById(req.params.id) 
			.then(user => res.json(user))
			.catch(err => res.status(400).json('Error: ' + err)); */
	});
});

router.route('/update/:id').post( async (req, res) => {
	try{
		const user = await User.findById(req.params.id);
		user.username = req.body.username;
		user.date = Date.parse(req.body.date);
		user.password = req.body.password;
		const savedUser = await user.save();
		res.json({savedUser});
	} catch(err) {
		res.status(400).json('Error: ' + err);
	}	
	/* User.findById(req.params.id)
	  .then(user => {
		user.username = req.body.username;
		user.date = Date.parse(req.body.date);
		userphone = Number(req.body.phone);
		user.password = req.body.password;

		user.save()
		  .then(() => res.json('User updated!'))
		  .catch(err => res.status(400).json('Error: ' + err));
	  })
	  .catch(err => res.status(400).json('Error: ' + err)); */
  });

module.exports = router;
const router = require('express').Router();
let Com = require('../models/form.model');

router.route('/').get( async (req, res) => {
	try {
		const coms = await Com.find({category: req.body.category});
		const S = coms.length;
		let sum=0;
		for(let i =0;i<S;i++){
			sum += Number(coms[i].index);
		}
		const average = sum/S;
		res.json({average});
	} catch(err) {
		res.statusCode(400).json('Error: ' + err);
	}

	/* Com.find({category: req.body.category})
		.then(coms =>  {
			let S = coms.length;
			let sum=0;
			for(let i =0;i<S;i++){
				sum += Number(coms[i].index);
			}
			sum= sum/S;
			res.json({sum});

		})
		.catch(err => res.statusCode(400).json('Error: ' + err)); */
});



router.route('/add').post( async (req, res) => {
	const index = Number(req.body.index);
	const category = req.body.category;
	const newCom = new Com({
		index,
		category,
	});

	try {
		const savedCom = await newCom.save();
		res.json(`${category} added!`);
	} catch(err) {
		res.statusCode(400).json('Error: ' + err);
	}

	/* newCom.save()
		   .then(() => res.json(`${category} added!`))
		   .catch(err => res.statusCode(400).json('Error: ' + err)); */
});


module.exports = router;
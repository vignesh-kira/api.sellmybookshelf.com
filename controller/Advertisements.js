const express = require('express');
const router = express.Router();
const Advertisement = require('../models/Advertisement');

// Get Advertisements list
router.get('/', (req, res) =>
	Advertisement.findAll()
		.then(advertisements => res.send(advertisements))
		.catch(err => console.log(err)));

// Get - View (EVERYONE)
router.get('/view/:id', (req, res) => {
	Advertisement.findOne({
		where: {id:req.params.id}
	})
		.then(advertisement => {
			if(advertisement == null){
				res.sendStatus(404);
			}else{
				res.status(200).json(advertisement)
			}
		})
		.catch( error => res.sendStatus(500).send(error))
});

// Create
router.post('/create', (req, res) => {
	let { title, description, studentClass, book_title, book_author, condition_text, condition_rating, book_seller_price, book_final_price, user_id, subject_id } = req.body;
	let advertisement = Object.assign({
		title,
		description,
		book_title,
		book_author,
		condition_text,
		condition_rating,
		book_seller_price,
		book_final_price,
		class_id: studentClass,
		user_id,
		subject_id,
	});

	Advertisement.create(advertisement)
		.then(advertisement => res.status(200).json(advertisement))
		.catch(error => res.sendStatus(409).send(error));
});

// Get (ONLY AUTHORIZED USER)
router.post('/:id', (req, res) => {
	Advertisement.findOne({
		where: {id:req.params.id, user_id: req.body.user_id }
	})
		.then(advertisement => {
			if(advertisement == null){
				res.sendStatus(404);
			}else{
				res.status(200).json(advertisement)
			}
		})
		.catch( error => res.sendStatus(500).send(error))
});

// Update
router.put('/update/:id', (req, res) => {
	let { title, description, studentClass, book_title, book_author, condition_text, condition_rating, book_seller_price, book_final_price, subject_id } = req.body;

	let advertisement = Object.assign({
		title,
		description,
		book_title,
		book_author,
		condition_text,
		condition_rating,
		book_seller_price,
		book_final_price,
		class_id: studentClass,
		subject_id,
	});

	Advertisement.update(advertisement, {
		returning: true,
		where: { id: req.params.id }
	})
		.then(() => res.status(200).json(req.body))
		.catch(error => res.sendStatus(400).send(error));
});

module.exports = router;

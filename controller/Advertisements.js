const express = require('express');
const router = express.Router();
const Advertisement = require('../models/Advertisement');

// Get Advertisements list
router.get('/', (req, res) =>
    Advertisement.findAll()
        .then(advertisements => res.send(advertisements))
        .catch(err => console.log(err)));

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

module.exports = router;

const express = require('express');
const router = express.Router();
const Advertisement = require('../models/Advertisement');
const Class = require('../models/Class');
const Subject = require('../models/Subject');
const AdvertisementStatus = require('../models/AdvertisementStatus');

// Get Advertisements list
router.get('/', (req, res) => {
	const class_id = req.query.studentClass;
	const subject_id = req.query.subject;
	const offset = req.query.page * 10;
	const limit = 10;
	const where = Object.assign( {},
		class_id && { class_id },
		subject_id && { subject_id }
	);

	Advertisement.findAndCountAll({
			where,
			include: [
				{
					model: AdvertisementStatus,
				},
				{
					model: Subject,
				},
				{
					model: Class,
				}
			],
			order: [
				['createdAt', 'DESC']
			],
			offset, // Number from where we want the data to be retrieved
			limit // Number of records to be retrieved
		}
	)
		.then(advertisements => res.send(advertisements))
		.catch(err => console.log(err))
});

// Get - View (EVERYONE)
router.get('/view/:id', (req, res) => {
	Advertisement.findOne({
		where: {id:req.params.id},
		include: [
			{
				model: AdvertisementStatus,
			},
			{
				model: Subject,
			},
			{
				model: Class,
			}
		]
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
		advertisementStatus_id: 4
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

// Get My Ads (ONLY AUTHORIZED USER)
router.get('/myads/:id', (req, res) => {
	Advertisement.findAll({
		where: {user_id:req.params.id},
		include: [
			{
				model: AdvertisementStatus,
			},
			{
				model: Subject,
			},
			{
				model: Class,
			}
		],
		order: [
			['createdAt', 'DESC']
		]
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

// Delete (ONLY AUTHORIZED USER)
router.delete('/:id', (req, res) => {
	Advertisement.destroy({
		where: { id:req.params.id }
	})
		.then(advertisement => {
			res.status(200).json(advertisement);
		})
		.catch( error => res.sendStatus(500).send(error))
});

module.exports = router;

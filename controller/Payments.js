const express = require('express');
const router = express.Router();
const Payments = require('../models/Payment');
const PaymentMethod = require('../models/PaymentMethod');
const PaymentStatus = require('../models/PaymentStatus');

// Get Payments list
router.get('/', (req, res) =>
	Payments.findAll()
		.then(payments => res.send(payments))
		.catch(err => console.log(err)));

// Get Advertisements list
// router.get('/', (req, res) => {
// 	const class_id = req.query.studentClass;
// 	const subject_id = req.query.subject;
// 	const offset = req.query.page * 10;
// 	const limit = 10;
// 	const where = Object.assign( {},
// 		class_id && { class_id },
// 		subject_id && { subject_id }
// 	);
//
// 	Order.findAndCountAll({
// 			where,
// 			include: [
// 				{
// 					model: Advertisement,
// 				},
// 				{
// 					model: User,
// 				},
// 				{
// 					model: OrderStatus,
// 				}
// 			],
// 			order: [
// 				['createdAt', 'DESC']
// 			],
// 			offset, // Number from where we want the data to be retrieved
// 			limit // Number of records to be retrieved
// 		})
// 		.then(orders => res.send(orders))
// 		.catch(err => console.log(err))
// });


module.exports = router;

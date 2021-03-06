const express = require('express');
const router = express.Router();
const Users = require('../models/User');
const Class = require('../models/Class');
const Section = require('../models/Section');
const School = require('../models/School');
const UserType = require('../models/UserType');

// Get users list
router.get('/', (req, res) =>
    Users.findAll()
        .then(users => res.send(users))
        .catch(error => res.status(500).send(error)));

// Login
router.post('/login', (req, res) => {
    let { phone, password} = req.body;

    return Users.findOne({ where: {
            phone,
            password
        }})
        .then(user => {
            if(user == null){
                res.sendStatus(404);
            }else{
                res.status(200).json(user)
            }
        })
        .catch( error => res.status(500).send(error))
});

// Get - View (EVERYONE)
router.get('/:id', (req, res) => {
    Users.findOne({
        where: {id:req.params.id},
        include: [
            {
                model: UserType,
            },
            {
                model: School,
            },
            {
                model: Class,
            },
            {
                model: Section,
            }
        ]
    })
        .then(user => {
            if(user == null){
                res.sendStatus(404);
            }else{
                res.status(200).json(user)
            }
        })
        .catch( error => res.sendStatus(500).send(error))
});

// Update
router.put('/update/:id', (req, res) => {
    let { firstname, lastname, bazaar_name, studentClass, section_id, email, about  } = req.body;

    let user = Object.assign({
        firstname,
        lastname,
        bazaar_name,
        class_id: studentClass,
        section_id,
        email,
        about
    });

    Users.update(user, {
        returning: true,
        where: { id: req.params.id }
    })
        .then(() => res.status(200).json(req.body))
        .catch(error => res.sendStatus(400).send(error));
});

// Register or Create
router.post('/register', (req, res) => {
    let { firstname, lastname, studentClass, section, email, phone, password } = req.body;
    let registration = Object.assign({
        firstname,
        lastname,
        email,
        phone,
        password,
        section_id: section,
        class_id: studentClass,
        school_id: '1',
        user_type_id: '1'
    });

    Users.findOrCreate({
        where: {
            phone
        },
        defaults: registration
    }).spread(function (user, created) {
        if(created){
            delete user.dataValues.password;
            res.status(200).json(user);
        }else{
            return res.sendStatus(409);
        }
    });
});

module.exports = router;

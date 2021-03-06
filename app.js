const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

// Database
const db = require('./config/database');

// Test DB
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err));

const app = express();

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Enable cors for all
app.use(cors());

// Index route
app.get('/', (req, res) => res.sendStatus(200));

// User routes
app.use('/users', require('./controller/Users'));

// School routes
app.use('/schools', require('./controller/Schools'));

// User Types routes
app.use('/user-types', require('./controller/UserTypes'));

// Advertisements routes
app.use('/advertisements', require('./controller/Advertisements'));

// Classes routes
app.use('/classes', require('./controller/Classes'));

// Sections routes
app.use('/sections', require('./controller/Sections'));

// Subjects routes
app.use('/subjects', require('./controller/Subjects'));

// Subjects routes
app.use('/advertisementStatuses', require('./controller/AdvertisementStatuses'));

// Order Statuses routes
app.use('/orderStatuses', require('./controller/OrderStatuses'));

// Orders routes
app.use('/orders', require('./controller/Orders'));

// Payment Methods routes
app.use('/paymentMethods', require('./controller/PaymentMethods'));

// Payment Statuses routes
app.use('/paymentStatuses', require('./controller/PaymentStatuses'));

// Payments routes
app.use('/payments', require('./controller/Payments'));

const PORT = process.env.PORT;

app.listen(PORT, console.log(`Server started on port ${PORT}`));

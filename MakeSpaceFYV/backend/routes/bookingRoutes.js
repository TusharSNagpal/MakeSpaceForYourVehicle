const express = require('express');
const router = express.Router();

const { getBooking, newBooking, goingOut, getOnGoingBooking } = require('../controllers/bookingsController')

router.post('/newBooking', newBooking)

router.get('/get', getBooking) // by vehicle number

router.put('/out', goingOut) // by vehicle number

router.post('/currentBooking', getOnGoingBooking)

// router.delete('/cancel', deleteProperty);

module.exports = router
const asyncHandler = require('express-async-handler')

const Booking = require('../models/bookingsModel')

// @desc GET properties..
// @route GET /api/properties
// @access Private
const getBooking = asyncHandler(async (req,res) => {
    const bookings = await Booking.find({vehicle_reg_no: req.body.vehicle_reg_no});

    res.status(200).json(bookings)
})

const newBooking = asyncHandler(async (req,res) => {
    const paramsBooking = req.body

    const booking = await Booking.create({
        owner_id: paramsBooking.owner_id,
        customer_id: paramsBooking.customer_id,
        vehicle_reg_no: paramsBooking.vehicle_reg_no,
        in_date: new Date(),
        out_date: null
    })

    // console.log(req.body);

    res.status(200).json(booking)
})

const goingOut = asyncHandler(async (req,res) => { //:id is parameter
    const filter = {vehicle_reg_no: req.body.vehicle_reg_no}
    const booking = await Booking.findOne(filter);

    if(!booking){
        res.status(400)
        throw new Error('No such booking found!')
    }

    const updatedBooking = {out_date: new Date()}

    await Booking.findOneAndUpdate(filter, updatedBooking)

    res.status(200).json({id: `Out Date updated Successfully`})
})

module.exports = {
    getBooking,
    newBooking,
    goingOut
}
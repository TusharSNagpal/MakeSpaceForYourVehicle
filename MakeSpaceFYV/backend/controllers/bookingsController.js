const asyncHandler = require('express-async-handler')

const Booking = require('../models/bookingsModel')
const Property = require('../models/propertiesModel')

// @desc GET properties..
// @route GET /api/properties
// @access Private
const getBooking = asyncHandler(async (req,res) => {
    const bookings = await Booking.find({vehicle_reg_no: req.params.vehicle_reg_no});
    res.status(200).json(bookings)
})

const getOnGoingBooking = asyncHandler(async (req,res) => {
    const bookings = await Booking.find({vehicle_reg_no: req.body.vehicle_reg_no, out_date: null});
    if(bookings.length === 0){
        res.status(400)
        throw new Error('No such booking found!')
    }
    const curDate = new Date();
    const inDate = new Date(bookings.in_date);

    const timeDifference = curDate.getTime() - inDate.getTime();

    let differentDays = Math.ceil(timeDifference / (1000 * 3600 * 24));
    res.status(200).json({...bookings, price: 50*differentDays});
})

const newBooking = asyncHandler(async (req,res) => {
    const {prop_id, owner_id, customer_id, vehicle_reg_no} = req.body

    if(!prop_id || !owner_id || !customer_id || !vehicle_reg_no) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    const booking = await Booking.create({
        prop_id,
        owner_id,
        customer_id,
        vehicle_reg_no,
        in_date: new Date(),
        out_date: null
    })

    const property = await Property.findById(prop_id);

    if(property.slots === 0){
        res.status(400)
        throw new Error('No more slots available!')
    }
    const updatedProperty = await Property.findByIdAndUpdate(prop_id, {slots: property.slots-1}, {new: true,})

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

    res.status(200).json({Sucess: "Done"})
})

module.exports = {
    getBooking,
    newBooking,
    goingOut,
    getOnGoingBooking
}
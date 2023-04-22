const asyncHandler = require('express-async-handler')

const Booking = require('../models/bookingsModel')
const Property = require('../models/propertiesModel')

// @desc GET properties..
// @route GET /api/properties
// @access Private
const getBooking = asyncHandler(async (req,res) => {
    const bookings = await Booking.find({vehicle_reg_no: req.body.vehicle_reg_no});

    res.status(200).json(bookings)
})

const getOnGoingBooking = asyncHandler(async (req,res) => {
    const bookings = await Booking.find({vehicle_reg_no: req.body.vehicle_reg_no, out_date: null});
    if(bookings.length === 0){
        res.status(400)
        throw new Error('No such booking found!')
    }
    const curDate = new Date();
    // console.log(bookings[0].in_date);
    const inDate = new Date(bookings[0].in_date);

    const timeDifference = curDate.getTime() - inDate.getTime();

    let differentDays = Math.ceil(timeDifference / (1000 * 3600 * 24));
    // console.log(inDate);
    res.status(200).json({...bookings, price: 50*differentDays});
})

const newBooking = asyncHandler(async (req,res) => {
    const paramsBooking = req.body

    const booking = await Booking.create({
        prop_id: paramsBooking.prop_id,
        owner_id: paramsBooking.owner_id,
        customer_id: paramsBooking.customer_id,
        vehicle_reg_no: paramsBooking.vehicle_reg_no,
        in_date: new Date(),
        out_date: null
    })

    const property = await Property.findById(paramsBooking.prop_id);

    if(property.slots === 0){
        res.status(400)
        throw new Error('No more slots available!')
    }
    const updatedProperty = await Property.findByIdAndUpdate(paramsBooking.prop_id, {slots: property.slots-1}, {new: true,})

    // console.log(req.body);

    res.status(200).json(booking)
})

const goingOut = asyncHandler(async (req,res) => { //:id is parameter
    const filter = {vehicle_reg_no: req.body.vehicle_reg_no, out_date: null};
    const booking = await Booking.findOne(filter);

    if(!booking){
        res.status(400)
        throw new Error('No such booking found!')
    }

    const updatedBooking = {out_date: new Date()}

    await Booking.findOneAndUpdate(filter, updatedBooking)

    const property = await Property.findOne({_id: booking.prop_id});

    await Property.findOneAndUpdate({_id: booking.prop_id},{slots: property.slots+1});

    res.status(200).json({Sucess: "Done"})
})

module.exports = {
    getBooking,
    newBooking,
    goingOut,
    getOnGoingBooking
}
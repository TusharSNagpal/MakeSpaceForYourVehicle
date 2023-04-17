const mongoose = require('mongoose')

const bookingsSchema = mongoose.Schema({
        owner_id: {
            type: Number,
            required: [true, 'Please add ownerId']
        },
        customer_id: {
            type: Number,
            required: [true, 'Please add customerId']
        },
        vehicle_reg_no: {
            type: String,
            required: [true, 'Please add vehicleRegNo']
        },
        in_date: {
            type: Date,
        },
        out_date: {
            type: Date,
        }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('bookings', bookingsSchema);
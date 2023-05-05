const mongoose = require('mongoose')

const bookingsSchema = mongoose.Schema({
        owner_id: {
            type: String,
            required: [true, 'Please add ownerId']
        },
        prop_id: {
            type: String,
            required: [true, 'Please add propId']
        },
        customer_id: {
            type: String,
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
    }
)

module.exports = mongoose.model('bookings', bookingsSchema);
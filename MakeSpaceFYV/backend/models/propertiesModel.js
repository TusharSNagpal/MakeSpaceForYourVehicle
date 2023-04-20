const mongoose = require('mongoose')
//Schema
const propertiesSchema = mongoose.Schema({
        owner_id: {
            type: String,
            required: [true, 'Please add ownerId']
        },
        slots: {
            type: Number,
            required: [true, 'Please add number of slots available in your property']
        },
        prop_address: {
            type: String,
            required: [true, 'Please add address of property']
        }
    }
)

module.exports = mongoose.model('Properties', propertiesSchema);
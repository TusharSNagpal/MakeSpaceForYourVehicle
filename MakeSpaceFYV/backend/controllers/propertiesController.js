const asyncHandler = require('express-async-handler')

const Property = require('../models/propertiesModel')

// @desc GET properties..
// @route GET /api/properties
// @access Private
const getProperty = asyncHandler(async (req,res) => {
    const properties = await Property.find()

    res.status(200).json(properties)
})

const postProperty = asyncHandler(async (req,res) => {
    const paramsProperty = req.body

    const property = await Property.create({
        owner_id: paramsProperty.owner_id,
        slots: paramsProperty.slots,
        prop_address: paramsProperty.prop_address
    })

    console.log(req.body);

    res.status(200).json(property)
})

const putProperty = asyncHandler(async (req,res) => { //:id is parameter
    const property = await Property.findById(req.params.id)

    if(!property){
        res.status(400)
        throw new Error('Property not found!')
    }

    const updatedProperty = await Property.findByIdAndUpdate(req.params.id, req.body, {new: true,})

    res.status(200).json({id: `PUT Successful by: ${req.params.id}`})
})

const deleteProperty = asyncHandler(async (req,res) => { //:id is parameter
    const property = await Property.findById(req.params.id)

    if(!property){
        res.status(400)
        throw new Error('Property not found!')
    }

    await Property.findByIdAndDelete(req.params.id);

    res.status(200).json({message: `DELETE Successful by: ${req.params.id}`})
})

module.exports = {
    getProperty,
    putProperty,
    postProperty,
    deleteProperty
}
const asyncHandler = require('express-async-handler')

const Property = require('../models/propertiesModel')

// @desc GET properties..
// @route GET /api/properties
// @access Private
const getProperty = asyncHandler(async (req,res) => {
    const properties = await Property.find({owner_id: req.params.owner_id})
    res.status(200).json(properties)
})

const registerProperty = asyncHandler(async (req,res) => {
    const paramsProperty = req.body
    if(!paramsProperty.owner_id || !paramsProperty.prop_address || !paramsProperty.slots) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    const property = await Property.create({
        owner_id: paramsProperty.owner_id,
        slots: paramsProperty.slots,
        prop_address: paramsProperty.prop_address
    })

    res.status(200).json(property)
})

const updateProperty = asyncHandler(async (req,res) => { //:id is parameter
    const property = await Property.findById(req.body.id)

    if(!property){
        res.status(400)
        throw new Error('Property not found!')
    }

    const updatedProperty = await Property.findByIdAndUpdate(req.body.id, req.body, {new: true,})

    res.status(200).json({id: `PUT Successful by: ${req.body.id}`})
})

const deleteProperty = asyncHandler(async (req,res) => { //:id is parameter
    const property = await Property.findById(req.body._id)

    if(!property){
        res.status(400)
        throw new Error('Property not found!')
    }

    await Property.findByIdAndDelete(req.body._id);

    res.status(200).json({message: `DELETE Successful by: ${req.params.id}`})
})

module.exports = {
    getProperty,
    updateProperty,
    registerProperty,
    deleteProperty
}
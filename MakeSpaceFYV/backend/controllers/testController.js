const asyncHandler = require('express-async-handler')
// @desc GET test
// @route GET /api/test
// @access Private
const getTest = asyncHandler(async (req,res) => {
    res.status(200).json({message: 'GET test'})
})

const postTest = asyncHandler(async (req,res) => {
    if(!req.body.text){
        res.status(400);
        throw new Error ('Please add text field..!')
    }

    console.log(req.body);

    res.status(200).json({message: 'SET test'})
})

const putTest = asyncHandler(async (req,res) => { //:id is parameter
    res.status(200).json({message: `PUT test ${req.params.id}`})
})

const deleteTest = asyncHandler(async (req,res) => { //:id is parameter
    res.status(200).json({message: `DELETE test ${req.params.id}`})
})

module.exports = {
    getTest,
    putTest,
    postTest,
    deleteTest
}
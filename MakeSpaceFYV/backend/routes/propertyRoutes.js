const express = require('express');
const router = express.Router();

const { getProperty, registerProperty, updateProperty, deleteProperty, getPropForCust } = require('../controllers/propertiesController')

router.post('/', registerProperty)

router.get('/get', getProperty)

router.put('/update', updateProperty)

router.delete('/delete', deleteProperty);

router.post('/getPropCust', getPropForCust)

module.exports = router
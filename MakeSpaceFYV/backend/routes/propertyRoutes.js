const express = require('express');
const router = express.Router();

const { getProperty, registerProperty, updateProperty, deleteProperty } = require('../controllers/propertiesController')

router.post('/', registerProperty)

router.get('/get/:owner_id', getProperty)

router.put('/update', updateProperty)

router.delete('/delete', deleteProperty);

module.exports = router
const express = require('express');
const router = express.Router();
//route

const { getProperty, postProperty, putProperty, deleteProperty } = require('../controllers/propertiesController')

router.route('/').get(getProperty).post(postProperty);

router.route('/:id').put(putProperty).delete(deleteProperty);

module.exports = router
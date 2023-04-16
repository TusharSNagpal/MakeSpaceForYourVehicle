const express = require('express');
const router = express.Router();

const { getProperty, postProperty, putProperty, deleteProperty } = require('../controllers/propertiesController')

// router.get('/', getTest);
// router.post('/', postTest);
//replaced with:
router.route('/').get(getProperty).post(postProperty);

router.route('/:id').put(putProperty).delete(deleteProperty);

module.exports = router
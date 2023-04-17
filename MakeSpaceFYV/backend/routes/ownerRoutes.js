const express = require('express')
const router = express.Router()
const {registerOwner, loginOwner, getOwner} = require('../controllers/ownerController')

router.post('/', registerOwner)
router.post('/login', loginOwner)
router.get('/getOwner', getOwner)

module.exports = router
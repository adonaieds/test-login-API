const express = require('express')
const router = express.Router()
const registerCtrl = require('../controllers/register-ctrl')

router.post('/register', registerCtrl.register)

module.exports = router
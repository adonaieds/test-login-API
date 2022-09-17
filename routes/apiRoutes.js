const express = require('express')
const router = express.Router()
const loginRouter = require('./login-route')
const registerRouter = require('./register-route')
const userRouter = require('./user-route')

router.use(loginRouter)
router.use(registerRouter)
router.use(userRouter)

module.exports = router
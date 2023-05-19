const express = require('express')
const router = express.Router()

const home = require('./modules/home.js')
const features = require('./modules/features.js')


router.use('/', home)
router.use('/', features)

module.exports = router

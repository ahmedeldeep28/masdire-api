const router = require("express").Router()
const subscribeController = require('../controllers/subscribe.controllers')
const bodyparser = require('body-parser').urlencoded({ extended: true })

router.post("/subscribe/create", bodyparser, subscribeController.postSubscribe)


module.exports = router

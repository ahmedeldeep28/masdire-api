const router = require("express").Router()
const subscribeController = require('../controllers/subscribe.controllers')

router.post("/subscribe/create", subscribeController.postSubscribe)


module.exports = router

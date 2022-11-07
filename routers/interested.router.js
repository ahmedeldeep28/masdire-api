const router = require("express").Router()
const interestedController = require('../controllers/interested.controllers')
const bodyparser = require('body-parser').urlencoded({ extended: true })

router.get("/interested", interestedController.getInterested)
router.post("/interested/create", bodyparser, interestedController.sendMessageInterested)
router.delete("/interested/:interestId", bodyparser, interestedController.deleteInterest)


module.exports = router

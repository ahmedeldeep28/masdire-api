const router = require("express").Router()
const interestedController = require('../controllers/interested.controllers')

router.get("/interested", interestedController.getInterested)
router.post("/interested/create", interestedController.sendMessageInterested)
router.delete("/interested/:interestId", interestedController.deleteInterest)


module.exports = router

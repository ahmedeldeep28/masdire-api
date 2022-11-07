const router = require("express").Router()
const bodyparser = require('body-parser').urlencoded({ extended: true })
const suggestController = require('../controllers/suggest.controllers')

router.get("/suggest", suggestController.getSuggest)
router.post("/suggest/create", bodyparser, suggestController.sendMessageSuggest)
router.delete("/suggest/:suggestId", bodyparser, suggestController.postDelete)


module.exports = router

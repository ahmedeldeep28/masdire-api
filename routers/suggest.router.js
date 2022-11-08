const router = require("express").Router()
const suggestController = require('../controllers/suggest.controllers')

router.get("/suggest", suggestController.getSuggest)
router.post("/suggest/create", suggestController.sendMessageSuggest)
router.delete("/suggest/:suggestId", suggestController.postDelete)


module.exports = router

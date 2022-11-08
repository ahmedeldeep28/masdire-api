const router = require("express").Router()
const contactController = require('../controllers/contact.controllers')


router.get("/contact", contactController.getMessages)
router.post("/contact", contactController.sendMessage)
router.delete("/contact/:messageId", contactController.deleteMessageById)


module.exports = router
const router = require("express").Router()
const contactController = require('../controllers/contact.controllers')
const bodyparser = require('body-parser').urlencoded({ extended: true })


router.get("/contact", contactController.getMessages)
router.post("/contact", bodyparser, contactController.sendMessage)
router.delete("/contact/:messageId", bodyparser, contactController.deleteMessageById)


module.exports = router
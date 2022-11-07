const router = require("express").Router()
const bodyparser = require('body-parser').urlencoded({ extended: true })
const authController = require("../controllers/auth.controllers")

router.get("/", authController.getLogin)
router.post("/", bodyparser, authController.postLogin)

module.exports = router

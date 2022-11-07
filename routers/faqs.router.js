const router = require("express").Router();
const faqsControllers = require('../controllers/faqs.controllers');
const bodyparser = require('body-parser').urlencoded({extended:true})

router.get("/faqs",faqsControllers.getQuestions)
router.post("/faqs/create",bodyparser,faqsControllers.createQuestion)
router.delete("/faqs/:questionId",bodyparser,faqsControllers.deleteQuestion)


module.exports = router
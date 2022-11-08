const router = require("express").Router();
const faqsControllers = require('../controllers/faqs.controllers');

router.get("/faqs", faqsControllers.getQuestions)

router.post("/faqs/create", faqsControllers.createQuestion)
router.delete("/faqs/:questionId", faqsControllers.deleteQuestion)


module.exports = router
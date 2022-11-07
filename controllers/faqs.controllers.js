const faqsModels = require("../models/faqs.models");

exports.getQuestions = async (req, res, next) => {
  try {
    const questions = await faqsModels.getAllQuestions()
    res.status(200).json({
      questions: questions
    })
  } catch (error) {
    res.status(404).json({
      message: error
    })
  }

};

exports.createQuestion = async (req, res, next) => {
  try {
    const result = await faqsModels.addNewQuestion(req.body)
    res.status(200).json({
      data: result
    })
  } catch (error) {
    res.status(404).json({
      message: error
    })
  }

};

exports.deleteQuestion = async (req, res, next) => {
  const { questionId } = req.params;
  try {
    const result = await faqsModels.deleteQuestion(questionId)
    res.status(200).json({
      data: result
    })
  } catch (error) {
    res.status(404).json({
      message: error
    })
  }

};

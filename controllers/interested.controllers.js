const interestedModles = require("../models/interested.models");

exports.getInterested = async (req, res, next) => {
  try {
    const interested = await interestedModles.getAllInterested()
    res.status(200).json({
      data: interested
    })
  } catch (error) {
    res.status(404).json({
      message: error
    })
  }
};

exports.deleteInterest = async (req, res, next) => {
  const { interestId } = req.params;
  try {
    const result = await interestedModles.deleteInterested(interestId)
    res.status(200).json({
      data: result
    })
  } catch (error) {
    res.status(404).json({
      message: error
    })
  }

};

exports.sendMessageInterested = async (req, res, next) => {
  let date = new Date();
  let data = {
    content: req.body.content,
    type: req.body.type,
    date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
  };
  try {
    const result = await interestedModles.addNewInterested(data)
    res.status(200).json({
      result,
    })
  } catch (error) {
    res.status(404).json({
      message: error
    })
  }
};

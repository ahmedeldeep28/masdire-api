const suggestModles = require("../models/suggest.models")
const sectionModles = require('../models/categorys.models')
const nodemailer = require('nodemailer');

exports.getSuggest = async (req, res) => {
    try {
        const suggest = await suggestModles.getAllSuggest()
        res.status(200).json({
            data: suggest
        })
    } catch (error) {
        res.status(404).json({
            message: error
        })
    }
}



exports.postDelete = async (req, res) => {
    const { suggestId } = req.params;
    try {
        const result = await suggestModles.deleteSuggest(suggestId)
        res.status(200).json({
            data: result
        })
    } catch (error) {
        res.status(404).json({
            message: error
        })
    }
}

exports.sendMessageSuggest = async (req, res) => {
    let date = new Date();
    let data = {
        name: req.body.name,
        email: req.body.email,
        siteName: req.body.siteName,
        siteCategorys: req.body.siteCategorys,
        message: req.body.message,
        date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
    }
    try {
        const result = await suggestModles.addNewMessage(data)
        res.status(200).json({
            data: result
        })
    } catch (error) {
        res.status(404).json({
            message: error
        })
    }

}
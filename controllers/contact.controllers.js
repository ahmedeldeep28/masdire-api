const contactModles = require("../models/contact.models")

exports.sendMessage = async (req, res, next) => {
    let date = new Date();
    let data = {
        name: req.body.name,
        email: req.body.email,
        object: req.body.object,
        message: req.body.message,
        date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
    }
    try {
        const result = await contactModles.addNewMessage(data)
        res.status(200).json({
            result,
        })
    } catch (error) {
        res.status(404).json({
            message: error
        })
    }


}

exports.getMessages = async (req, res, next) => {
    try {
        const messages = await contactModles.getAllMessages()
        res.status(200).json({
            data: messages
        })
    } catch (error) {
        res.status(404).json({
            message: error
        })
    }
}

exports.deleteMessageById = async (req, res, next) => {
    const { messageId } = req.params;
    try {
        const result = await contactModles.deleteMessageById(messageId)
        res.status(200).json({
            data: result
        })
    } catch (error) {
        res.status(404).json({
            message: error
        })
    }

}
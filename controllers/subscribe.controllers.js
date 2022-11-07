const subscribeModles = require("../models/subscribe.models")


exports.postSubscribe = async (req, res, next) => {
    let date = new Date();
    let data = {
        email: req.body.email,
        date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
    }
    try {
        const result = await subscribeModles.addNewSubscribe(data)
        res.status(200).json({
            data: result
        })
    } catch (error) {
        res.status(404).json({
            message: error
        })
    }
}

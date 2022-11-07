const mongoose = require("mongoose");
const DB_URL = require("./DB_URL").DB_URL;

const messageSchema = mongoose.Schema({
    name: String,
    email: String,
    object: String,
    message: String,
    date: String,
});

const messageItem = mongoose.model("message", messageSchema);

exports.addNewMessage = async (data) => {
    try {
        await mongoose.connect(DB_URL);
        let message = await messageItem.create(data);
        return message
    } catch (error) {
        throw error
    } finally {
        mongoose.disconnect();
    }
};

exports.getAllMessages = async () => {
    try {
        await mongoose.connect(DB_URL);
        const messages = await messageItem.find({}, {}, { sort: { timeStamp: 1 } });
        return messages
    } catch (error) {
        throw error
    } finally {
        mongoose.disconnect();
    }

}
exports.deleteMessageById = async (id) => {
    try {
        await mongoose.connect(DB_URL);
        const message = await messageItem.deleteOne({ _id: id })
        return message
    } catch (error) {
        throw error
    } finally {
        mongoose.disconnect();
    }
}
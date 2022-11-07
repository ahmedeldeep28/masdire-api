const mongoose = require("mongoose");
const DB_URL = require("./DB_URL").DB_URL;

const suggestSchema = mongoose.Schema({
    name: String,
    email: String,
    siteName: String,
    siteCategorys: String,
    message: String,
    date: String,
});

const suggestMessage = mongoose.model("suggestMessage", suggestSchema);


exports.getAllSuggest = async () => {
    try {
        await mongoose.connect(DB_URL);
        const suggests = await suggestMessage.find({}, {}, { sort: { timeStamp: 1 } });
        return suggests
    } catch (error) {
        throw error
    } finally {
        mongoose.disconnect();
    }

}
exports.deleteSuggest = async (id) => {
    try {
        await mongoose.connect(DB_URL);
        const result = await suggestMessage.deleteOne({ _id: id });
        return result
    } catch (error) {
        throw error
    } finally {
        mongoose.disconnect();
    }
}

exports.addNewMessage = async (data) => {
    try {
        await mongoose.connect(DB_URL);
        let result = await suggestMessage.create(data);
        return result
    } catch (error) {
        throw error
    } finally {
        mongoose.disconnect();
    }

};

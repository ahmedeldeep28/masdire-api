const mongoose = require("mongoose");
const DB_URL = require("./DB_URL").DB_URL;

const interestedSchema = mongoose.Schema({
    content: String,
    type: String,
    date: String
});

const interested = mongoose.model("interested", interestedSchema);

exports.getAllInterested = async () => {
    try {
        await mongoose.connect(DB_URL);
        const result =  await interested.find({}, {}, { sort: { timeStamp: 1 } })
        return result
    } catch (error) {
        throw error
    } finally {
        mongoose.disconnect();
    }

}

exports.addNewInterested = async (data) => {
    try {
        await mongoose.connect(DB_URL);
        let item = await interested.create(data);
        return item;
    } catch (error) {
        throw error
    } finally {
        mongoose.disconnect();
    }

};

exports.deleteInterested = async (id) => {
    try {
        await mongoose.connect(DB_URL);
        const result = await interested.deleteOne({ _id: id })
        return result
    } catch (error) {
        throw error
    } finally {
        mongoose.disconnect();
    }

}
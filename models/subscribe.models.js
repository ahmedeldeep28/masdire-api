const mongoose = require("mongoose");
const DB_URL = require("./DB_URL").DB_URL;

const subscribeSchema = mongoose.Schema({
    email: String,
    date: String
});

const subscribe = mongoose.model("subscribe", subscribeSchema);

exports.addNewSubscribe = async (data) => {
    console.log(data)
    try {
        await mongoose.connect(DB_URL);
        const findSubscribeEmail = await subscribe.find({ email: data.email });
        if (findSubscribeEmail) {
            throw "هذا البريد مشترك بالفعل" 
        } else {
            let result = await subscribe.create(data);
            return result;
        }
    } catch (error) {
        throw error
    } finally {
        mongoose.disconnect();
    }
};

exports.getUsersBySectionSub = async (categorys) => {
    try {
        await mongoose.connect(DB_URL);
        const result = await subscribe.find({ categorys: categorys });
        return result
    } catch (error) {
        throw error
    } finally {
        mongoose.disconnect();
    }
}
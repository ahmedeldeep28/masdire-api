const mongoose = require("mongoose");
const DB_URL = require("./DB_URL").DB_URL;

const faqsSchema = mongoose.Schema({
    title: String,
    content: String,
});

const faqItem = mongoose.model("faqs", faqsSchema);


exports.getAllQuestions = async () => {
    try {
        await mongoose.connect(DB_URL);
        const faqs = await faqItem.find();
        return faqs
    } catch (error) {
        throw error
    } finally {
        mongoose.disconnect();
    }
}


exports.addNewQuestion = async (data) => {
    try {
        await mongoose.connect(DB_URL);
        let item = await faqItem.create(data);
        return item;
    } catch (error) {
        throw error
    } finally {
        mongoose.disconnect();
    }

};

exports.deleteQuestion = async (id) => {
    try {
        await mongoose.connect(DB_URL);
        const faqs = await faqItem.deleteOne({ _id: id })
        return faqs
    } catch (error) {
        throw error
    } finally {
        mongoose.disconnect();
    }
}
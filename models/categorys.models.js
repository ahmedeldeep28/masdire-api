const mongoose = require("mongoose");
const DB_URL = require("./DB_URL").DB_URL;

const categorySchema = mongoose.Schema({
    name: String,
    title: String,
    description: String,
    image: String,
    date: String
});

const categoryItem = mongoose.model("category", categorySchema);

exports.getAllCategorys = async () => {
    try {
        await mongoose.connect(DB_URL);
        const categorys = await categoryItem.find({});
        return categorys
    } catch (error) {
        throw error
    } finally {
        mongoose.disconnect();
    }

}

exports.getCategoryByName = async (name) => {
    console.log("name",name);

    try {
        await mongoose.connect(DB_URL);
        const category = await categoryItem.find({ name: name })
        return category
    } catch (error) {
        throw error
    } finally {
        mongoose.disconnect();
    }
}

exports.addNewCategory = async (data) => {
    try {
        await mongoose.connect(DB_URL);
        let item = await categoryItem.create(data);
        return item;
    } catch (error) {
        throw error
    } finally {
        mongoose.disconnect();
    }
};



exports.deleteCategoryById = async (id) => {
    console.log(id);

    try {
        await mongoose.connect(DB_URL);
        const result = await categoryItem.deleteOne({ _id: id })
        console.log(result);

        return result
    } catch (error) {
        throw error
    } finally {
        mongoose.disconnect();
    }
}
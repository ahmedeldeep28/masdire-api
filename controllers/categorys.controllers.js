const categorysModles = require('../models/categorys.models')



exports.getAllcategorys = async (req, res, next) => {
    try {
        let categorys = await categorysModles.getAllCategorys();
        res.status(200).json({
            categorys: categorys,
        })
    } catch (error) {
        res.status(404).json({
            message: error
        })
    }
}


exports.getCategoryByName = async (req, res, next) => {
    let { name } = req.params;

    try {
        let [category] = await categorysModles.getCategoryByName(name);
        res.status(200).json({
         category,
        })
    } catch (error) {
        res.status(404).json({
            message: error
        })
    }
}




exports.addNewCategory = async (req, res, next) => {
    try {
        let date = new Date();
        let data = {
            name: req.body.name,
            title: req.body.title,
            description: req.body.description,
            image: req.file.filename,
            date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
        }
        let result = await categorysModles.addNewCategory(data);

        res.status(200).json({
            data: result
        })
    } catch (error) {
        res.status(404).json({
            message: error
        })
    }
}

exports.deleteCategoryById = async (req, res, next) => {
    let { categoryId } = req.params;

    try {
        let result = await categorysModles.deleteCategoryById(categoryId);
        res.status(200).json({
            data: result
        })
    } catch (error) {
        res.status(404).json({
            message: error
        })
    }
}

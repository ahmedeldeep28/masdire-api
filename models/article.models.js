const mongoose = require("mongoose");
const DB_URL = require("./DB_URL").DB_URL;
const articleSchema = mongoose.Schema({
    title: String,
    url: String,
    keywords: String,
    description: String,
    timestamp: Number,
    visits: {
        default: 0,
        type: Number
    },
    type: String,
    category: String,
    date: String,
    image: String,
    public: Boolean,
    nomination: Boolean,
    content: String
});

const articleItem = mongoose.model("article", articleSchema);

// create new Article
exports.addNewArticle = async (data) => {
    try {
        await mongoose.connect(DB_URL);

        let findArticle = await articleItem.find({ title: data.title });

        if (findArticle.length != 0) {
            throw "هذا المقال موجود من قبل"
        } else {
            let item = await articleItem.create(data);
            return item;
        }
    } catch (error) {
        throw error
    } finally {
        mongoose.disconnect()
    }
};

//get the articles that allows it to be published
exports.getArticlesPublic = async (pageNumber) => {
    let limit = 10;
    try {
        await mongoose.connect(DB_URL)
        let article = await articleItem.find({ public: true }).sort("timestamp").limit(limit * 1).skip((pageNumber - 1) * limit).exec()
        return article
    } catch (error) {
        throw error
    } finally {
        mongoose.disconnect()
    }
}

//get all articles and display them in dashbord
exports.getAllArticles = async (numPage) => {
    let limit = 8;
    try {
        await mongoose.connect(DB_URL)
        const article = await articleItem.find().sort("timestamp").limit(limit * 1).skip((numPage - 1) * limit).exec()
        return article
    } catch (error) {
        throw error
    } finally {
        mongoose.disconnect()
    }

}
//get articles by the name section belonging to it and display it in its own section
exports.getArticleByCategory = async (category, pageNumber) => {
    let limit = 12;
    try {
        await mongoose.connect(DB_URL)
        const article = await articleItem.find({ category: category }).limit(limit * 1).skip((pageNumber - 1) * limit).exec()
        return article
    } catch (error) {
        throw error
    } finally {
        mongoose.disconnect()
    }
}

//get article by article title
exports.getArticlesByTitle = async (url) => {
    try {
        await mongoose.connect(DB_URL)
        const article = await articleItem.find({ url: url, public: true });
        return article
    } catch (error) {
        throw error
    } finally {
        mongoose.disconnect()
    }

}

//Increase the number of visitors by clicking on the article
exports.addCountVisit = async (url) => {
    try {
        await mongoose.connect(DB_URL)
        const findArticle = await articleItem.find({ url: url })
        const updateArticle = await articleItem.updateOne({ url: url }, { visits: findArticle[0].visits + 1 })
        return updateArticle
    } catch (error) {
        throw error
    } finally {
        mongoose.disconnect()
    }

}

//Get the articles with the most visits 
exports.getArticlesCountVisit = async () => {
    try {
        await mongoose.connect(DB_URL)
        const articles = await articleItem.find({ public: true }, {}, { limit: 6, sort: { visits: -1 } })
        return articles
    } catch (error) {
        throw error
    } finally {
        mongoose.disconnect()
    }
}

//get recently added articles
exports.getNewArticles = async () => {
    try {
        await mongoose.connect(DB_URL)
        const articles = await articleItem.find({ public: true }, {}, { limit: 6, sort: { timestamp: -1 } })
        return articles
    } catch (error) {
        throw error
    } finally {
        mongoose.disconnect()
    }
}

//get the articles we recommended
exports.getArticlesNomination = async () => {
    try {
        await mongoose.connect(DB_URL)
        const articles = await articleItem.find({ public: true, nomination: true }, {}, { limit: 6, sort: { timestamp: -1 } })
        return articles
    } catch (error) {
        throw error
    } finally {
        mongoose.disconnect()
    }

}

// Search for the article you were searching for
exports.serachArticle = async (query) => {
    let limit = 10;
    var regex = new RegExp(query.term);  // 'i' makes it case insensitive
    try {
        await mongoose.connect(DB_URL)
        let articles = await articleItem.find({ title: regex, public: true }).sort("timestamp").limit(limit * 1).skip((query.page - 1) * limit).exec()
        return articles
    } catch (error) {
        throw error
    } finally {
        mongoose.disconnect()
    }
}

// Update when the article was published
exports.updatePublic = async (id, public) => {
    try {
        await mongoose.connect(DB_URL)
        const result = await articleItem.updateOne({ _id: id }, { public: public });
        return result
    } catch (error) {
        throw error
    } finally {
        mongoose.disconnect()
    }

}
exports.updateArticle = async (url, data) => {
    try {
        await mongoose.connect(DB_URL)
        const article = await articleItem.updateOne({ url: url }, data)
        return article
    } catch (error) {
        throw error
    } finally {
        mongoose.disconnect()
    }
}
//Update the article nomination statuses
exports.updateNomination = async (id, nomination) => {
    try {
        await mongoose.connect(DB_URL)
        const article = await articleItem.updateOne({ _id: id }, { nomination: nomination })
        return article
    } catch (error) {
        throw error
    } finally {
        mongoose.disconnect()
    }
}
// remove Article with admain
exports.deletArticle = async (id) => {
    try {
        await mongoose.connect(DB_URL)
        const article = await articleItem.deleteOne({ _id: id })
        return article
    } catch (error) {
        throw error
    } finally {
        mongoose.disconnect()
    }
}

const articleModle = require('../models/article.models')
const sectionModles = require('../models/categorys.models')



exports.getHome = async (req, res, next) => {
    try {
        let newArticle = await articleModle.getArticlesReNew();
        let articleVisits = await articleModle.getArticlesCountVisit();
        let articlNominations = await articleModle.getArticlesNomination();
        let sections = await sectionModles.getAllSections();

        res.render("index", {
            newArticle: newArticle,
            articleVisits: articleVisits,
            articlNominations: articlNominations,
            sections: sections
        })
    } catch (error) {
        res.redirect("/error")
    }
}

exports.getSearch = async (req,res,next) =>{
    
    try {
        let keywords = req.query.keywords;
        let articlNominations = await articleModle.getArticlesNomination();
        let article = await articleModle.serachArticle(keywords);

        res.render("search", {
            articles: article,
            keywords: keywords,
            articlNominations: articlNominations
        })
        
    } catch (error) {
        console.log(error);
        res.redirect("/error")
    }

}
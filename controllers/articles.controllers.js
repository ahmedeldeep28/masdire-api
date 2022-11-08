const articlesModles = require("../models/article.models");
const subscribeModles = require("../models/subscribe.models");
const sectionModles = require("../models/categorys.models");
const nodemailer = require("nodemailer");
const slugify = require("slugify");


exports.getArticlesPublic = async (req, res, next) => {
  try {
    let { pageNumber } = req.params;
    let articles = await articlesModles.getArticlesPublic(pageNumber);
    res.status(200).json({
      articles,
    })
  } catch (error) {
    res.status(404).json({
      message: error
    })
  }
};

exports.articleVisits = async (req, res, next) => {
  try {
    let articlesVisits = await articlesModles.getArticlesCountVisit();
    res.status(200).json({
      articlesVisits,
    })
  } catch (error) {
    res.status(404).json({
      message: error
    })
  }
};

exports.getArticlePage = async (req, res, next) => {
  try {
    let url = await req.params.url;
    let [article] = await articlesModles.getArticlesByTitle(url);
    article.image
    await articlesModles.addCountVisit(url);
    res.status(200).json({
      article,
    })
  } catch (error) {
    res.status(404).json({
      message: error
    })
  }
};

exports.getArticlesNomination = async (req, res, next) => {
  try {
    let articlesNomination = await articlesModles.getArticlesNomination();
    res.status(200).json({
      articlesNomination,
    })
  } catch (error) {
    res.status(404).json({
      message: error
    })
  }
};

exports.getNewArticles = async (req, res, next) => {
  try {
    let newArticles = await articlesModles.getNewArticles();
    res.status(200).json({
      newArticles,
    })
  } catch (error) {
    res.status(404).json({
      message: error
    })
  }
};

exports.searchArticles = async (req, res) => {
  try {
    let articles = await articlesModles.serachArticle(req.query);
    res.status(200).json({
      articles,
    })
  } catch (error) {
    res.status(404).json({
      message: error
    })
  }

}

exports.getArticleByCategory = async (req, res, next) => {
  let { category, page } = req.query;
  try {
    const articles = await articlesModles.getArticleByCategory(category, Number(page));
    res.status(200).json({
     articles,
    })
  } catch (error) {
    res.status(404).json({
      message: error
    })
  }
}


exports.postUpdateArticle = async (req, res, next) => {
  try {
    const { url } = req.body;
    const data = {
      title: req.body.title,
      url: slugify(req.body.url),
      keywords: req.body.keywords,
      descraption: req.body.descraption,
      type: req.body.type,
      category: req.body.category,
      public: (req.body.public = Boolean(req.body.public)),
      nomination: (req.body.public = Boolean(req.body.nomination)),
      content: req.body.content,
    };
    const result = await articlesModles.updateArticle(url, data);
    res.status(200).json({
      data: result
    })

  } catch (error) {
    res.status(404).json({
      message: error
    })
  }

};


exports.postArticle = async (req, res, next) => {
  try {
    let date = new Date();
    let data = {
      title: req.body.title,
      url: slugify(req.body.url),
      keywords: req.body.keywords,
      description: req.body.description,
      timestamp: Date.now(),
      type: req.body.type,
      category: req.body.category,
      date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
      image: req.file.filename,
      public: (req.body.public = Boolean(req.body.public)),
      nomination: (req.body.public = Boolean(req.body.nomination)),
      content: req.body.content,
    };

    const result = await articlesModles.addNewArticle(data);
    res.status(200).json({
      data: result
    })

  } catch (error) {
    res.status(404).json({
      message: error
    })
  }


};

exports.deletArticle = async (req, res, next) => {
  const { articleId } = req.params;
  try {
    const result = await articlesModles.deletArticle(articleId);
    res.status(200).json({
      data: result
    })
  } catch (error) {
    res.status(404).json({
      message: error
    })
  }

};

exports.postUpdatePublic = async (req, res, next) => {
  try {
    const public = (req.body.public = Boolean(req.body.public));
    const id = req.body.articleId;
    const result = await articlesModles.updatePublic(id, public)
    res.status(200).json({
      data: result
    })
  } catch (error) {
    res.status(404).json({
      message: error
    })
  }
};

exports.postUpdateNomination = async (req, res, next) => {
  try {
    const nomination = (req.body.nomination = Boolean(req.body.nomination));
    const id = req.body.articleId;
    const result = await articlesModles.updateNomination(id, nomination)
    res.status(200).json({
      data: result
    })
  } catch (error) {
    res.status(404).json({
      message: error
    })
  }
};

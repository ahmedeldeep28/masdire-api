const router = require("express").Router();
const bodyparser = require('body-parser').urlencoded({ extended: true })
const multer = require("multer");
const articlesController = require("../controllers/articles.controllers");


// user router
router.get("/articles/page/:pageNumber", articlesController.getArticlesPublic);
router.get("/article/:url", articlesController.getArticlePage);
router.get("/articles/nomination", articlesController.getArticlesNomination);
router.get("/articles/visits", articlesController.articleVisits);
router.get("/articles/new", articlesController.getNewArticles);
router.get("/search", articlesController.searchArticles)
// refactor code in underline
router.get("/articles/category", articlesController.getArticleByCategory)

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, ck) => {
      ck(null, "images");
    },
    filename: (req, file, ck) => {
      ck(null, Date.now() + "-" + file.originalname);
    },
  }),
});

// dashbord router
router.post("/article/create", bodyparser, upload.single("image"), articlesController.postArticle);
router.get("/articles", articlesController.getArticlesPublic);
router.post("/article/update", bodyparser, upload.single("image"), articlesController.postUpdateArticle);
router.delete("/article/:articleId", bodyparser, articlesController.deletArticle);
router.post("/article/public", bodyparser, articlesController.postUpdatePublic);
router.post("/article/nomination", bodyparser, articlesController.postUpdateNomination);

module.exports = router;

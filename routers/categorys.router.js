const router = require("express").Router()
const categorysController = require("../controllers/categorys.controllers")
const multer = require("multer");

// user category router
router.get("/categorys", categorysController.getAllcategorys);
router.get("/category/:name", categorysController.getCategoryByName);


// dashbord category router
const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, "images/")
        },
        filename: (req, file, cb) => {
            cb(null, Date.now() + '-' + file.originalname)
        },
    })
});


router.post("/category/create", upload.single("image"), categorysController.addNewCategory)


router.delete("/category/:categoryId", categorysController.deleteCategoryById);



module.exports = router

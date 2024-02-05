

const router = require('express').Router();

const {
    getAllCategories,
    getCategoryById,
    addCategory,
    updateCategoryById,
    deleteCategoryById } = require('../controller/category');

router.get("/", getAllCategories);
router.get("/:id" , getCategoryById);
router.post("/", addCategory);
router.patch("/:id", updateCategoryById);
router.delete("/:id", deleteCategoryById);

module.exports = router;
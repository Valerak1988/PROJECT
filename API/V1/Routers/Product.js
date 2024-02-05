

const router = require('express').Router();

const {
    getAllProducts,
    getProductById,
    addProduct,
    updateProductById,
    deleteProductById } = require('../controller/product');

router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.post("/", addProduct);
router.patch("/:id" , updateProductById); 
router.delete("/:id", deleteProductById);

module.exports = router;
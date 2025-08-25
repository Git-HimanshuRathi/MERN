const express = require("express");
const ProductModel = require("../models/product.js");
const {createproduct , updateProduct}  = require('../controllers/productControllers.js')

const router = express.Router();

router.post("/createproduct",createproduct );
router.put('/updateProduct' , updateProduct )

module.exports = router;

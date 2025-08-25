const ProductModel = require("../models/product.js");


async function createproduct(req, res) {
  const body = req.body;

  await ProductModel.create({
    product_name: body.product_name,
    product_price: body.product_price,
    isInStock: body.isInStock,
    category: body.category,
  });

  res.status(201).json({ message: "Product Created" });
}

async function updateProduct(req , res){
 // you have to finish
}

module.exports = {
    createproduct,
    updateProduct
}

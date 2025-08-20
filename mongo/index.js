const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose
  .connect(
    "mongodb+srv://mrinal:f6XyAD5DL9Td4app@cluster0.8aifpdh.mongodb.net/social?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.error("Cannot Connect ", err);
  });

let productSchema = new mongoose.Schema({
  proudctName: {
    type: String,
    required: true,
  },

  product_price: {
    type: String,
    required: true,
  },

  isInStock: {
    type: Boolean,
    required: true,
  },

  category: {
    type: String,
  },
});


let ProductModel = mongoose.model('products', productSchema)

app.listen(8080, () => {
  console.log("server Running");
});

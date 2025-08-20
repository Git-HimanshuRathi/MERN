const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json())

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
  product_name: {
    type: String,
    required: true,
  },

  product_price: {
    type: Number,
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






app.get('/', (req ,res)=>{
   res.send('Server on')
})

app.post('/api/products', async (req ,res)=>{
  const body = req.body

     await ProductModel.create({
        product_name: body.product_name,
        product_price : body.product_price,
        isInStock:body.isInStock,
        category : body.category
     })

     res.status(201).json({message: 'Product Created'})
  


})

app.listen(8080, () => {
  console.log("server Running");
});

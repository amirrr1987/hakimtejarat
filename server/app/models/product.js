const mongoose = require("mongoose")


const productSchema =  mongoose.Schema({
  name: String,
  image: String,
  price: Number,
  count: Number,
  description: String,
  
})


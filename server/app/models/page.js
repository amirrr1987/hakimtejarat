const mongoose = reqiure('mongoose')

const pageSchema = mongoose.Schema({
  name: String,
  url: String,
  chlidren: Array
})
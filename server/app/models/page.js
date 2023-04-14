const mongoose = require('mongoose');

const pageSchema = new mongoose.Schema({
  title: {
    type: String,
    default : '',
    required: true
  },
  content:{
    type: String,
    default : '',
    required: true
  },
  url: {
    type: String,
    default : '',
    required: true
  },
  img: {
    type: String,
  }

})

module.exports = mongoose.model('page', pageSchema)
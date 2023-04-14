const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
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
})

module.exports = mongoose.model('post', postSchema)
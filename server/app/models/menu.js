const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    name: {
        type: String,
        default : 'home',
        required: true
    },
    url:{
        type: String,
        default : '/',
        required: true
    },
    icon:{
        type: String,
        default : '',
        required: false
    },

})

module.exports = mongoose.model('menu', menuSchema)
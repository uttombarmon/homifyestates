const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    title: {
        type: String,
    },
    img: {
        img1: String,
        img2: String
    },
    date: String,
    description: {
        type: String,
    },
    tag: [],
      feedback :[],
    
    author: {
        type: String,
        required: true
    }
});

const latestNewsModel = new mongoose.model("LatestNewsCollection",schema);

module.exports = latestNewsModel
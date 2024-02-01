const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    img: {
        img1: String,
        img2: String
    },
    date: String,
    description: {
        type: String,
        required: true
    },
    tag: [],
    comment: [],
    author: {
        type: String,
        required: true
    }
});

const latestNewsModel = new mongoose.model("LatestNewsCollection",schema);

module.exports = latestNewsModel
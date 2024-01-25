const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    id: String,
    title: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
},
    {
        versionKey: false
    }
);

const reviewModel = new mongoose.model('reviewsCollection', schema);
module.exports = reviewModel;
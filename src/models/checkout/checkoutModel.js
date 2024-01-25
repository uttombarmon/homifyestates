const mongoose = require('mongoose');

const schema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    beds: {
        type: Number,
        required: true
    },
    baths: {
        type: Number,
        required: true
    },
    sqft: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
},
    {
        versionKey: false
    }
);


const checkoutModel = new mongoose.model("checkoutCollection", schema);
module.exports = checkoutModel;
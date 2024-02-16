const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    id:String,
    date:String,
    comment:String,
    rating:String,
    name:String,
    image:String,
},
    {
        versionKey: false
    }
);

const reviewModel = new mongoose.model('ReviewsCollection', schema);
module.exports = reviewModel;
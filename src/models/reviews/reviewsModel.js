const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    id:{type: mongoose.Schema.Types.ObjectId,ref:'checkoutCollection'},
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
const mongoose = require('mongoose');
const wishListSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    image:{
    type:String
    } ,
    name:{
        type:String
    },
    price:{
        type:String
    },
    author:{
        type:String
    },
    propety:{
        type:String
    },
}, { versionKey: false });

const wishListModel = new mongoose.model('WishListCollection',wishListSchema);
module.exports = wishListModel ;
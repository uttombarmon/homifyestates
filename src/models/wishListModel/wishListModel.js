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
    property:{type:mongoose.Schema.Types.ObjectId, ref:'checkoutCollection'}
}, { versionKey: false });

const wishListModel = new mongoose.model('WishListCollection',wishListSchema);
module.exports = wishListModel ;
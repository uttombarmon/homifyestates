const mongoose = require('mongoose');
const wishListSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    productId: {
        type: String,
        required: true
    }
}, { versionKey: false });


const wishListModel = new mongoose.model('WishListCollection',wishListSchema);
module.exports = wishListModel ;
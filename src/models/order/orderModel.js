const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    name: String,
    email: String,
    product: String,
    amount: Number,
    date:String,
    phone:Number,
    paymentStatus:String,
    transectionId:String

},
    {
        versionKey: false
    }
);

const orderModel = new mongoose.model('OrderCollection', orderSchema);
module.exports = orderModel;
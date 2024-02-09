const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    name: String,
    email: String,
    product: String,
    amount: Number,
    date:String,
    phone:Number,
    paymentStatus:Boolean,
    transectionId:String,
    property:{type:mongoose.Schema.Types.ObjectId, ref:'checkoutCollection'}

},
    {
        versionKey: false
    }
);

const orderModel = new mongoose.model('OrderCollection', orderSchema);
module.exports = orderModel;
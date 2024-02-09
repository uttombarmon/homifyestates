const express = require('express');
const adminRouter = express.Router();
const orderModel = require('../../models/order/orderModel');
const checkoutModel = require('../../models/checkout/checkoutModel');

// get all checkout data;
adminRouter.get('/availablesold', async (req, res) => {
    try {
        const result = await checkoutModel.find();
        console.log('avilable data is founded');
        const availabledata =result.filter(property =>property.property_details.status.toLowerCase().includes('available'))
        res.send({'total':result,'available':availabledata}).status(200)
    } catch (error) {
        console.log('failed to find the checkout data');
        res.send(error.message).status(500)
    }
});
//   annual report 
adminRouter.get('/annual', async (req, res) => {
    const getdata = await orderModel.find({}).populate('property')
    const rent = getdata.filter(property =>property.property.property_status.toLowerCase().includes('rent'))
    const sale = getdata.filter(property =>property.property.property_status.toLowerCase().includes('sale'))
    res.send({'rent':rent, 'sale':sale});
})
// get all order data;
adminRouter.get('/transections', async (req, res) => {
    try {
        const result = await orderModel.find();
        console.log('order data is founded');
        res.send(result).status(200)
    } catch (error) {
        console.log('failed to find the checkout data');
        res.send(error.message).status(500)
    }
});
module.exports = adminRouter
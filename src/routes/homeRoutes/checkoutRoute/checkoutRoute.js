const express = require('express');
const { model } = require('mongoose');
const checkoutModel = require('../../../models/checkout/checkoutModel');
const checkoutRoute = express.Router();
// post multiple data ;
checkoutRoute.post('/checkout', async (req, res) => {
  try {
    const result = await checkoutModel.insertMany(req.body);
    console.log('checkout/home data is inserted');
    res.send(result).status(200)
  } catch (error) {
    console.log('failed to insert the checkout data');
    res.send(error.message).status(500)
  }
});
// get all checkout data;
checkoutRoute.get('/checkout', async (req, res) => {
  try {
    const result = await checkoutModel.find();
    console.log('checkout/home data is founded');
    res.send(result).status(200)
  } catch (error) {
    console.log('failed to find the checkout data');
    res.send(error.message).status(500)
  }
});
// get single property data;
checkoutRoute.get('/checkout/:id', async (req, res) => {
  try {
    const id = req.params.id
    const result = await checkoutModel.findById({ _id:id});
    console.log(result);
    console.log('checkout/home data is founded');
    res.send(result).status(200)
  } catch (error) {
    console.log('failed to find the checkout data');
    res.send(error.message).status(500)
  }
});
module.exports = checkoutRoute;
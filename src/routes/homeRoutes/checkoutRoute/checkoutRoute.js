const express = require('express');
const { model } = require('mongoose');
const checkoutModel = require('../../../models/checkout/checkoutModel');
const checkoutRoute = express.Router();

// post multiple data ;
checkoutRoute.post('/checkout', async (req, res) => {
  // console.log("fdfdfd", req.body);
  try {
    const result = await checkoutModel(req.body).save();
    res.send(result).status(200)
  } catch (error) {
    console.log('failed to insert the checkout data');
    res.send(error.message).status(500)
  }
});
// get all checkout data;
checkoutRoute.get('/checkout', async (req, res) => {
  try {
    // console.log(req.query.type)
    const result = await checkoutModel.find().queryFilterFn(req.query.want, req.query.location, req.query.type);
    res.send(result).status(200)
  } catch (error) {
    res.send(error.message).status(500)
  }
});
// get features latest property data;
checkoutRoute.get('/allcheckout', async (req, res) => {
  try {
    const result = await checkoutModel.find()
    res.send(result)
  } catch (error) {
    console.log('failed to find the checkout data');
    res.send(error.message).status(500)
  }
});
// get features latest property data;
checkoutRoute.get('/features', async (req, res) => {
  try {
    const result = await checkoutModel.find()
    if (result.length) {
      const sortedData = result.sort((a, b) => new Date(b.property_details.date_listed) - new Date(a.property_details.date_listed))
      res.send(sortedData.slice(0, 6))
    } else {
      res.status(200).send(result);
    }
  } catch (error) {
    console.log('failed to find the checkout data');
    res.send(error.message).status(500)
  }
});

// get single property data;
checkoutRoute.get('/checkout/:id', async (req, res) => {
  try {
    const id = req.params.id
    const result = await checkoutModel.findById({ _id: id });
    res.send(result).status(200)
  } catch (error) {
    res.send(error.message).status(500)
    console.log('failed to find the checkout data');
  }
});
module.exports = checkoutRoute;
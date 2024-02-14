const express = require('express');
const { model } = require('mongoose');
const checkoutModel = require('../../../models/checkout/checkoutModel');
const checkoutRoute = express.Router();

// post multiple data ;
checkoutRoute.post('/checkout', async (req, res) => {
  try {
    const result = await checkoutModel(req.body).save();
    console.log('checkout/home data is inserted');
    // console.log("fdfdfd",result);
    res.send(result).status(200)
  } catch (error) {
    console.log('failed to insert the checkout data');
    res.send(error.message).status(500)
  }
});



// get all checkout data;
checkoutRoute.get('/checkout', async (req, res) => {
  try {
    console.log(req.query.type)
    const result = await checkoutModel.find().queryFilterFn(req.query.want, req.query.location, req.query.type);
    console.log("fdfdfd",result);
    console.log('checkout/home data is founded');
    res.send(result).status(200)
  } catch (error) {
    console.log('failed to find the checkout data');
    res.send(error.message).status(500)
  }
});

// get all checkout email data for dashboard;
// checkoutRoute.get('/checkout/:email', async (req, res) => {
//   try {
//     const result = await checkoutModel.find({email:req.params.email});
//     console.log('agent dashborad data is founded');
//     res.send(result).status(200)
//   } catch (error) {
//     console.log('failed to find the agent dashborad  data');
//     res.send(error.message).status(500)
//   }
// });


// get single property data;
checkoutRoute.get('/checkout/:id', async (req, res) => {
  try {
    const id = req.params.id
    const result = await checkoutModel.findById({_id:id});
    console.log(result);
    console.log('checkout/home data is founded');
    res.send(result).status(200)
  } catch (error) {
    res.send(error.message).status(500)
    console.log('failed to find the checkout data');
  }
});
module.exports = checkoutRoute;
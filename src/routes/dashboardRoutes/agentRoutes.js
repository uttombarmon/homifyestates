const express = require('express');
const { model } = require('mongoose');
const checkoutModel = require('../../models/checkout/checkoutModel');
const agentRoute = express.Router();

//delete
agentRoute.delete('/delete/:id', async (req, res) => {
    const itemId = req.params.id;
    try {
      // Use deleteOne with a query based on _id
      const deletedItem = await checkoutModel.deleteOne({ _id: itemId });
         res.send(deletedItem);
    } catch (error) {
      console.log(error);
    }
  });

// order update /propetices/update/
agentRoute.patch('/propetices/update/:id', async (req, res) => {
  try {
      console.log(req.params.email)
      const result = await checkoutModel.findByIdAndUpdate({ _id: req.params.id }, {
          $set: {
            title: req?.body?.title
            // address: req?.body?.address,
            // city: req?.body?.city,
            //  phone: req?.body?.phone,
            // price: req?.body?.price,
            // totalArea: req?.body?.totalArea,
            // unit: req?.body?.unit,
            //  room: req?.body?. room,
            // bedroom: req?.body?.bedroom,
            //  bathroom: req?.body?. bathroom,
            // floor: req?.body?.floor,
            // kitchen: req?.body?.kitchen,
            // balcony: req?.body?.balcony,
            // place: req?.body?.place,
            // description: req?.body?.description,
            // bannerImage: req?.body?.bannerImage,
            //  facilImage: req?.body?. facilImage,
            //  mapCode: req?.body?. mapCode,
            //  PropertyTypes: req?.body?. PropertyTypes,
            //  thumImage: req?.body?. thumImage,
            //  country: req?.body?. country,
            //  featured: req?.body?. featured,
            // purpose: req?.body?.purpose,
              
          }
      });
      console.log(result)
      // console.log(' a single user is inserted successfully to database');
      res.send(result).status(200)
  } catch (error) {
      // console.log(' a single user insertion failed to database');
      res.send(error.message).status(500)
  }
});


  module.exports = agentRoute;


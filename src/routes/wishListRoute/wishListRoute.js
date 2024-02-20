const express = require('express');
const wishListModel = require('../../models/wishListModel/wishListModel');
const checkoutModel = require('../../models/checkout/checkoutModel');
const wishListRouter = express.Router();

// wish list get route;
wishListRouter.get('/:emails',async(req,res)=>{
    try {
      const result = await wishListModel.find({email:req.params.emails});
        res.send(result)
    } catch (error) {
       res.send({error:error.message}).status(500) 
    }
});

wishListRouter.get('/wish/property', async (req, res) => {
  
  try {
    const result = await wishListModel.find();
    console.log(result);
    res.send(result);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});


//wish list post route
wishListRouter.post('/',async(req,res)=>{
   try {
    await wishListModel(req.body).save();
    res.json({success:"wish list is inserted successfully"})
   } catch (error) {
    res.json({error:error.message})
   }
});

// delte

wishListRouter.delete('/:id', async (req, res) => {
    const itemId = req.params.id;
    try {
      // Use deleteOne with a query based on _id
      const deletedItem = await wishListModel.deleteOne({ _id: itemId });
         res.send(deletedItem);
    } catch (error) {
      console.log(error);
    }
  });


  // make offer api
  // post multipl
  wishListRouter.get('/make/offer', async (req, res) => {
  const id = req.query.id
  // console.log('h',typeof id);
  try {
    const result = await checkoutModel.findOne({_id:id});
    res.send(result).status(200)
    console.log(result ," baler data");
  } catch (error) {
    console.log('failed to  data');
    res.send(error.message).status(500)
  }
});




module.exports = wishListRouter;
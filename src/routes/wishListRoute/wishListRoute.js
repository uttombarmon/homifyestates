const express = require('express');
const wishListModel = require('../../models/wishListModel/wishListModel');
const wishListRouter = express.Router();

// wish list get route;

wishListRouter.get('/:emails',async(req,res)=>{
    try {
        result = await wishListModel.find({email:req.params.emails});
        res.send(result)
    } catch (error) {
       res.send({error:error.message}).status(500) 
    }
})

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



module.exports = wishListRouter;
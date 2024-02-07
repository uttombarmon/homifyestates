const express = require('express');
const wishListModel = require('../../models/wishListModel/wishListModel');
const wishListRouter = express.Router();

// wish list get route;

wishListRouter.get('/:email',async(req,res)=>{
    try {
        result = await wishListModel.find({email:req.params.email});
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

module.exports = wishListRouter;
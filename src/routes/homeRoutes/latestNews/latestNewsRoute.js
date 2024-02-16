const express = require('express');
const latestNewsModel = require('../../../models/latestNews/latestNewsModel');
const latestNewRouter = express.Router();

// post all the latest news data;
latestNewRouter.post('/latestNews',async(req,res)=>{
    try {
        const result = await latestNewsModel.insertMany(req.body);
        res.json({message:"latest news data is inserted successfully"}).status(200)
        
    } catch (error) {
        res.json({error:error.message}).status(500)
    }
});

// get all the latest news data;
latestNewRouter.get('/latestNews',async(req,res)=>{
    try {
        const result = await latestNewsModel.find();
        res.send(result.slice(0,3)).status(200)
        
    } catch (error) {
        res.json({error:error.message}).status(500)
    }
});
// get all the latest news data;
latestNewRouter.get('/latestNews/id/:id',async(req,res)=>{
    const id = req.params.id
    try {
        const result = await latestNewsModel.findById(id);
        res.send(result).status(200)
        
    } catch (error) {
        res.json({error:error.message}).status(500)
    }
});

module.exports = latestNewRouter ;
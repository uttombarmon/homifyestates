const express = require('express');
const latestNewsModel = require('../../../models/latestNews/latestNewsModel');
const tokenVerify = require('../../../middleware/TokenVerify/TokenVerify');
const latestNewRouter = express.Router();

// post all the latest news data;


latestNewRouter.post('/latestNews',tokenVerify,async(req,res)=>{

    try {
        const result = await latestNewsModel.insertMany(req.body);
        res.json({ message: "latest news data is inserted successfully" }).status(200)

    } catch (error) {
        res.json({ error: error.message }).status(500)
    }
});

// get all the latest news data;
latestNewRouter.get('/latestNews', async (req, res) => {
    try {
        const result = await latestNewsModel.find();
        res.send(result.slice(0, 3)).status(200)

    } catch (error) {
        res.json({ error: error.message }).status(500)
    }
});
// get all the latest news data;

latestNewRouter.get('/latestNews/id/:id',tokenVerify,async(req,res)=>{

    const id = req.params.id
    try {
        const result = await latestNewsModel.findById(id);
        res.send(result).status(200)

    } catch (error) {
        res.json({ error: error.message }).status(500)
    }
});

latestNewRouter.put('/latestNews/comment/:id', async (req, res) => {
    const id = req.params.id;
    try {
        console.log(id);
        const result = await latestNewsModel.findByIdAndUpdate(id,
            { $push: { feedback: req.body.feedback } },
            { new: true }
        );
        console.log(result);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = latestNewRouter;
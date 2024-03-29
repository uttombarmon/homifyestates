const express = require('express');
const reviewModel = require('../../../models/reviews/reviewsModel');
const tokenVerify = require('../../../middleware/TokenVerify/TokenVerify');
const reviewRouter = express.Router();

// get all review data ;
reviewRouter.get('/reviews', async (req, res) => {
    try {
        const result = await reviewModel.find().populate('id')
        if (result.length) {
            const sortedData = result.sort((a, b) => new Date(b.date) - new Date(a.date))
            // console.log(sortedData);
            res.send(sortedData.slice(0, 4))
        } else {
            res.status(200).send(result);
        }
    } catch (error) {
        console.log('fail to find all reviews data', error.message)
        res.send(error).status(500)
    }
})
// get single review data ;
reviewRouter.get('/reviews/id/:id', tokenVerify, async (req, res) => {
    try {
        const id = req.params.id
        const result = await reviewModel.find({ id: id })
        if (result.length) {
            const sortedData = result.sort((a, b) => new Date(a.date) - new Date(b.date))
            // console.log('data', result);
            res.send(sortedData)
        } else {
            res.status(200).send(result);
        }
    } catch (error) {
        console.log('fail to find all reviews data', error.message)
        res.send(error).status(500)
    }
})
// post multiple review data ;
reviewRouter.post('/reviews', tokenVerify, async (req, res) => {
    console.log(req.body.datas);
    try {
        const result = await reviewModel(req.body.datas).save();
        // console.log('Multiple review data is inserted:', result);
        res.status(200).json(result);
    } catch (error) {
        console.error('Failed to post all reviews data:', error);
        res.status(500).json({ error: error.message });
    }
});

module.exports = reviewRouter;
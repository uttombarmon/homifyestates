const express = require('express');
const reviewModel = require('../../../models/reviews/reviewsModel');
const reviewRouter = express.Router();

// get all review data ;
reviewRouter.get('/reviews', async (req, res) => {
    try {
        const result = await reviewModel.find();
        console.log('all review data is founded');
        res.send(result).status(200)
    } catch (error) {
        console.log('fail to find all reviews data')
        res.send(error).status(500)
    }
})
// post multiple review data ;
reviewRouter.post('/reviews', async (req, res) => {
    try {
        const result = await reviewModel.insertMany(req.body);
        console.log('multiple review data is inserted');
        res.send(result).status(200)
    } catch (error) {
        console.log('fail to post all reviews data')
        res.send(error).status(500)
    }
})

module.exports = reviewRouter;
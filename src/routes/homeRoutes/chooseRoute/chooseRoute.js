const express = require('express');
const chooseModel = require('../../../models/choose/chooseModel');
const chooseRoute = express.Router();


// post multiple choose data;
chooseRoute.post('/choose', async (req, res) => {
    try {
        const result = await chooseModel.insertMany(req.body);
        console.log('all choose data is inserted successfully');
        res.send(result).status(200)
    } catch (error) {
        console.log('failed to post choose data');
        res.send(error.message).status(500)
    }
}
);
// find all choose data ;
chooseRoute.get('/choose', async (req, res) => {
    try {
        const result = await chooseModel.find();
        console.log('all choose data is founded successfully');
        res.send(result).status(200)
    } catch (error) {
        console.log('failed to find all choose data');
        res.send(error.message).status(500)
    }
}
);


module.exports = chooseRoute;
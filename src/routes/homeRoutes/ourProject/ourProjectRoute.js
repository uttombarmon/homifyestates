const express = require('express');
const ourProjectModel = require('../../../models/ourProject/ourProjectModel');
const ourProjectRouter = express.Router();


// post all the our projects data;
ourProjectRouter.post('/our-project', async (req, res) => {
    try {
        const result = await ourProjectModel.insertMany(req.body);
        res.json({ message: "our project data is inserted successfully" }).status(200);
    } catch (error) {
        res.json({ error: error.message }).status(500)
    }
});

// get all the our projects data ;
ourProjectRouter.get('/our-project', async (req, res) => {
    try {
        const result = await ourProjectModel.findOne();
        res.send(result).status(200);
    } catch (error) {
        res.json({ error: error.message }).status(500)
    }
});

module.exports = ourProjectRouter;
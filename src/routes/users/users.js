const express = require('express');
const userModel = require('../../models/userModel/userModel');
const userRoute = express.Router();



// get a user to DB;
userRoute.get('/:email', async (req, res) => {
    try {
        // console.log(req.body)
        const result = await userModel.findOne({email :req.params.email});
        console.log(' a single user is found successfully to database');
        res.send(result).status(200)
    } catch (error) {
        console.log(' a single user finding operation failed to database');
        res.send(error.message).status(500)
    }
});

// post a user to DB;
userRoute.post('/user', async (req, res) => {
    try {
        // console.log(req.body)
        const result = await userModel(req.body).save();
        console.log(' a single user is inserted successfully to database');
        res.send(result).status(200)
    } catch (error) {
        console.log(' a single user insertion failed to database');
        res.send(error.message).status(500)
    }
});

// update a user to DB;
userRoute.patch('/user/:id', async (req, res) => {
    try {
        // console.log(req.body.status)
        const result = await userModel.updateOne({ _id: req.params.id }, {
            $set: {
                name: req?.body?.name,
                status: req?.body?.status,
                img: req?.body?.img
            }
        });
        console.log(result)
        console.log(' a single user is inserted successfully to database');
        res.send(result).status(200)
    } catch (error) {
        console.log(' a single user insertion failed to database');
        res.send(error.message).status(500)
    }
});

module.exports = userRoute;
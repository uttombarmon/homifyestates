const express = require('express');
const userModel = require('../../models/userModel/userModel');
const userRoute = express.Router();



// get a user to DB;
userRoute.get('/:email', async (req, res) => {
    try {
        // console.log(req.body)
        const result = await userModel.findOne({ email: req.params.email });
        console.log(' a single user is found successfully to database');
        res.send(result).status(200)
    } catch (error) {
        console.log(' a single user finding operation failed to database');
        res.send(error.message).status(500)
    }
});
// get all user to DB;
userRoute.get('/all/users', async (req, res) => {
    try {
        // console.log(req.body)
        const result = await userModel.find({});
        console.log(' a single user is found successfully to database');
        res.send(result).status(200)
    } catch (error) {
        console.log(' a single user finding operation failed to database');
        res.send(error.message).status(500)
    }
});
//make admin api
userRoute.patch('/all/makeadmin', async (req, res) => {
    const id = req.query.id
    const data = await userModel.updateOne({ _id: id }, { $set: { role: 'admin' } })
    res.send(data)
})
//make agent api
userRoute.patch('/all/makeagent', async (req, res) => {
    const id = req.query.id
    const data = await userModel.updateOne({ _id: id }, { $set: { role: 'agent' } })
    res.send(data)
})
//mark fraud api
userRoute.patch('/all/markfraud', async (req, res) => {
    const id = req.query.id
    const data = await userModel.updateOne({ _id: id }, { $set: { role: 'fraud' } })
    res.send(data)
})
//delete user api
userRoute.delete('/all/deleteuser', async (req, res) => {
    const id = req.query.id
    const data = await userModel.deleteOne({ _id:id })
    res.send(data)
})

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
userRoute.patch('/user/:email', async (req, res) => {
    try {
         console.log(req.params.email)
        const result = await userModel.updateOne({ email: req.params.email }, {
            $set: {
                name: req?.body?.name,
                photoURL: req?.body?.photoURL,
                city:req?.body?.city,
                country:req?.body?.country,
                address:req?.body?.address,
                phone:req?.body?.phone
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
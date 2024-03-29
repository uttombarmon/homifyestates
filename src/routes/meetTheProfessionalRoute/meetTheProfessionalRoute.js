const express = require('express');
const meetTheProfessionalModel = require('../../models/meetTheProfessional/meetTheProfessionalModel');
const tokenVerify = require('../../middleware/TokenVerify/TokenVerify');
const meetTheProfRouter = express.Router();

meetTheProfRouter.post('/meet-professional', async (req, res) => {
    try {
        const result = await meetTheProfessionalModel.insertMany(req.body);
        res.json({ message: "meet the professional data is inserted to DB" }).status(200)

    } catch (error) {
        res.json({ message: error })

    }
});

// get all data ;
meetTheProfRouter.get('/meet-professional', async (req, res) => {
    try {
        const result = await meetTheProfessionalModel.find();
        // console.log(result);
        res.send(result).status(200)
    } catch (error) {
        res.json({ message: error })
    }
})

meetTheProfRouter.get('/meet-professional/id/:id',tokenVerify,async(req,res)=>{
    const id = req.params.id
    try {
        const result = await meetTheProfessionalModel.findById(id);
        res.send(result).status(200)
        
    } catch (error) {
        res.json({error:error.message}).status(500)
    }
});


module.exports = meetTheProfRouter;
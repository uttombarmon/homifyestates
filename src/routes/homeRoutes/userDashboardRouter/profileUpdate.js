const express = require('express');
const userProfileData = require('../../../models/userDashbordModel/updateProfileInfo');
const userProfileRouter = express.Router();

// post all the latest news data;
userProfileRouter.post('/userUpdateProfiles',async(req,res)=>{
    try {
        const result = await userProfileData(req.body).save();
        res.json({message:"userProfle data is inserted successfully"}).status(200)
        
    } catch (error) {
        res.json({error:error.message}).status(500)
    }
});

// get all the latest news data;
userProfileRouter.get('/userUpdateProfiles',async(req,res)=>{
    try {
        const result = await userProfileData.find();
        res.send(result).status(200)
        
    } catch (error) {
        res.json({error:error.message}).status(500)
    }
});

module.exports = userProfileRouter ;
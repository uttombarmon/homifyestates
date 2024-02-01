const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    position:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    personalInfo:{
        listing:{type:Number},
        experience:{type:Number},
        Locales:{type:String}
    },
    social:{
        phone:{type:String},
        email:{type:String}
    },
});


const meetTheProfessionalModel = new mongoose.model("MeetTheProfessional",schema)
module.exports = meetTheProfessionalModel
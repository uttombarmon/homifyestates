const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    name: {
        type: String,
        
    },
    photo: {
        type: String,
    },
    city: {
        type: String,

    },
    country: {
        type: String,

    },
     website:{
            type:String
  },
  address :{
    type:String
  },
  phone :{
    type:Number
  },
  email:{
     type:String
  },
 
},
    {
        versionKey: false
    }
);

const userProfileData = new mongoose.model('userProfileUpdateInfo',schema);

module.exports = userProfileData ;
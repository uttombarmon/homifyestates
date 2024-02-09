const mongoose = require('mongoose');
const userSchema =  mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    photoURL:{
        type:String,
        required:true
    },
    password:String,
    role:{
        type:String,
        enum:['user','agent','admin'],
        required:true
    },
    phone:String,
    city:String,
    address:String,
    country:String,
    method:{
        type:String,
        enum:['google','facebook','email password']
    }
},
{
    versionKey:false
}
);


const userModel = new mongoose.model('Usercollection',userSchema);

module.exports = userModel ;
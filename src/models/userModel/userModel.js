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
    img:{
        type:String,
        required:true
    },
    pass:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:['user','agent'],
        required:true
    }
},
{
    versionKey:false
}
);


const userModel = new mongoose.model('Usercollection',userSchema);

module.exports = userModel ;
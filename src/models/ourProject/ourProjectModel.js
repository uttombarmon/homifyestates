const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    title:String,
    description:String,
    images:[]
},
{
    versionKey:false
});

const ourProjectModel = new mongoose.model("OurProjectCollection",schema);
module.exports = ourProjectModel; 
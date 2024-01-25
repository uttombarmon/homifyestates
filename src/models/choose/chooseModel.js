const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
},
    {
        versionKey: false
    }
);

const chooseModel = new mongoose.model('chooseDataCollection',schema);

module.exports = chooseModel ;
const mongoose = require('mongoose');

const schema = mongoose.Schema({
    title: String,
    email: String,
    location: String,
    property_status: String,
    description: String,
    property_image: String,
    property_details: mongoose.Schema.Types.Mixed,
    facilities: [String],
    floor_plan: {
      image: String
    },
    map: String,
    author: {
      name: String,
      contact: String,
      phone: String
    }
  },
    {
        versionKey: false
    }
);


const checkoutModel = new mongoose.model("checkoutCollection", schema);
module.exports = checkoutModel;
const mongoose = require('mongoose');

const schema = mongoose.Schema({
    title: String,
    location: String,
    property_status: String,
    description: String,
    property_image: String,
    property_details: {
      rooms: String,
      status: String,
      price: String,
      garages: String,
      bed_rooms: String,
      type: String,
      baths: String,
      originating_year: Number,
      size: String,
      date_listed: String,
      floor: String,
      kitchen: String,
      balcony: String,
      thumImage: String,
      unit: String,
      featured: String
    },
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
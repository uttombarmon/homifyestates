const mongoose = require('mongoose');

const schema = mongoose.Schema({
  title: String,
  email: String,
  location: String,
  property_status: String,
  description: String,
  property_image: String,
  type:String,
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

schema.query.queryFilterFn = function (want = '', location = '',type='') {
  console.log('type:',want,location,type)
   return this.where({property_status:new RegExp(want,'i'),location: new RegExp(location,'i'),type: new RegExp(type,'i') })
}


const checkoutModel = new mongoose.model("checkoutCollection", schema);
module.exports = checkoutModel;
const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
  pid: {
    type: String,
    required: true,
  },
  pname: {
    type: String,
    required: true,
  },
  pdescription: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});
var Product = mongoose.model('products', ProductSchema);

module.exports = { Product };

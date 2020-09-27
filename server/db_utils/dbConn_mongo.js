const mongoose = require('mongoose');
const { Product } = require('../models/Products');

let db_ops = {};
db_ops.mongoUrl = `mongodb://${
  process.env.MONGO_HOST || 'localhost'
}:27017/shopbridge`;

db_ops.getData = () => {
  return new Promise((resolve, reject) => {
    Product.find()
      .then((products) => {
        resolve(products);
      })
      .catch((err) => reject(err));
  });
};

db_ops.findByProductId = (id) => {
  console.log('db connnes', id);
  return new Promise((resolve, reject) => {
    Product.findOne({ pid: id })
      .then((products) => {
        resolve(products);
      })
      .catch((err) => reject(err));
  });
};
db_ops.findByProductIdToDelete = (id) => {
  console.log('3');
  console.log('db connnes', id);
  return new Promise((resolve, reject) => {
    Product.deleteOne({ pid: id })
      .then((products) => {
        resolve(products);
      })
      .catch((err) => reject(err));
  });
};

db_ops.setData = (data) => {
  return new Promise((resolve, reject) => {
    let productData = {
      pid: data.pid,
      pname: data.pname,
      pdescription: data.pdescription,
      price: data.price,
    };
    Product.create(productData)
      .then((productDetails) => resolve(productDetails))
      .catch((err) => reject(err));
  });
};

module.exports = { db_ops };

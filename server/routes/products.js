var express = require('express');
var router = express.Router();
var cntlProduct = require('../controllers/controller');
const _ = require('underscore');
const cors = require('cors');
var Products = new cntlProduct('Process Products');
/* GET product listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
/* ADD new product */
router.post('/add-product', cors(), _.bind(Products.addProduct, Products));

router.get('/get-product', cors(), _.bind(Products.getProductList, Products));
router.get(
  '/get-productbyid/:pid',
  cors(),
  _.bind(Products.getProductDetailsById, Products)
);

router.delete(
  '/delete-productbyid/:pid',
  cors(),
  _.bind(Products.deleteProductById, Products)
);
module.exports = router;

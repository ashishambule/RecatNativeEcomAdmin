'use strict';
const Step = require('step');

const { db_ops } = require('../db_utils/dbConn_mongo');

module.exports = class ProductController {
  constructor(_name) {
    console.log(_name);
    this.name = _name;
    console.info(this.name + ' initialized');
  }

  getProductList(req, res, next) {
    let self = this;
    let statusCode = 400;

    Step(
      function getProductList() {
        self.getData(this);
      },

      function _sendResponse(err, _resp) {
        if (err) {
          console.error(err);
          res.status(statusCode).send({
            status: false,
            message: 'Unable to retrive data!',
            error: err,
            response: null,
          });
        } else {
          res.status(200).send({
            status: true,
            message: 'success',
            error: null,
            response: _resp,
          });
        }
      }
    );
  }

  addProduct(req, res, next) {
    let self = this;
    let statusCode = 400;
    console.log('addProduct ::::: ', req.body);
    if (req.body && req.body.pid) {
      Step(
        function _findByProductId() {
          self.findByProductId(req.body.pid, this);
        },

        function _addProduct(err, resp) {
          console.log('add produc', err);
          if (err) {
            throw 'Unable to retrive data!!!!!';
          } else if (resp) {
            console.log('resp :::: ', resp);
            statusCode = 202;
            throw 'Record already exist';
          } else {
            self.setData(req.body, this);
          }
        },

        function _sendResponse(err, _resp) {
          if (err) {
            console.error(err);
            res.status(statusCode).send({
              status: false,
              message: 'Unable to retrive data!',
              error: err,
              response: null,
            });
          } else {
            res.status(200).send({
              status: true,
              message: 'success',
              error: null,
              response: _resp,
            });
          }
        }
      );
    } else {
      console.log('AddProduct :::::  else ');
      res.status(200).send({
        status: false,
        message: 'Required fileds are missing...',
        error: null,
      });
    }
  }

  getProductDetailsById(req, res, next) {
    let statusCode = 500;
    let self = this;
    let prod_id = req.params.pid;
    Step(
      function _getProductDetailsById() {
        self.findByProductId(prod_id, this);
      },

      function _sendResponse(err, _resp) {
        if (err) {
          console.error(err);
          res.status(statusCode).send({
            status: false,
            message: 'Unable to retrive data!',
            error: err,
            response: null,
          });
        } else {
          res.status(200).send({
            status: true,
            message: 'success',
            error: null,
            response: _resp,
          });
        }
      }
    );
  }

  deleteProductById(req, res, next) {
    console.log('1');
    let statusCode = 500;
    let self = this;
    let prod_id = req.params.pid;
    Step(
      function _deleteProductById() {
        self.findByProductIdToDelete(prod_id, this);
      },

      function _sendResponse(err, _resp) {
        if (err) {
          console.error(err);
          res.status(statusCode).send({
            status: false,
            message: 'Unable to retrive data!',
            error: err,
            response: null,
          });
        } else {
          res.status(200).send({
            status: true,
            message: 'success',
            error: null,
            response: _resp,
          });
        }
      }
    );
  }
  async getData(cb) {
    console.log('getetetet');
    db_ops
      .getData()
      .then((products) => {
        return cb(null, products);
      })
      .catch((err) => {
        return cb(err, null);
      });
  }

  async findByProductId(id, cb) {
    console.log(id);
    try {
      let pid = await db_ops.findByProductId(id);
      return cb(null, pid);
    } catch (err) {
      return cb(err, null);
    }
  }

  async findByProductIdToDelete(id, cb) {
    console.log('2');
    console.log(id);
    try {
      let pid = await db_ops.findByProductIdToDelete(id);
      return cb(null, pid);
    } catch (err) {
      return cb(err, null);
    }
  }

  async setData(body, cb) {
    db_ops
      .setData(body)
      .then((product) => {
        return cb(null, product);
      })
      .catch((err) => {
        return cb(err, null);
      });
  }
};

const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const Product = require('../models/product');
const passport = require('passport');

/* GET users listing. */
router.get('/', asyncHandler(async function (req, res, next) {

  const products = await Product.getAll();
  setTimeout((function () { res.send(products) }), 2000);
  // res.json(
  //   products
  // );

}));

router.get('/:id', asyncHandler(async function (req, res, next) {
  const { id } = req.params;
  const product = await Product.getDetail(id);
  res.send(product)

}));

module.exports = router;

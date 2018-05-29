const express = require('express');
const router = express.Router();
const User = require('../models/user');
const loginRequired = require('./utils').loginRequired;
const asyncHandler = require('express-async-handler');

/* add product to cart */
router.post('/', loginRequired, asyncHandler(async (req, res, next) => {
  const user = req.user;
  const cart_item = req.body;
  const new_item = await user.addToCart(cart_item);

  res.json(...new_item);

}));

router.delete('/:id', loginRequired, asyncHandler(async (req, res, next) => {
  const user = req.user;
  const { id } = req.params;
  await user.deleteFromCart(id);
  res.send();

}));

module.exports = router;

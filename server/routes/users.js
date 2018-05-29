const express = require('express');
const router = express.Router();
const User = require('../models/user');
const asyncHandler = require('express-async-handler');

/* GET users listing. */
router.get('/', asyncHandler(async (req, res, next) => {
  const user = req.user ? await req.user.toAuthJSON() : null;
  res.json(user);
}));

module.exports = router;

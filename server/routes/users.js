const express = require('express');
const router = express.Router();
const User = require('../models/user');

/* GET users listing. */
router.get('/', function (req, res, next) {
  const user = req.user ? req.user.toAuthJSON() : null;
  res.json({ user });

});

module.exports = router;

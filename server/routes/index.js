const express = require('express');
const router = express.Router();
const loginRequired = require('./utils').loginRequired;

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/protected', loginRequired, function (req, res, next) {
  console.log('req', req.user)
  res.send("protected route");
});

module.exports = router;

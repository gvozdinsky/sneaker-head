const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');

/* GET users listing. */

router.post('/register', asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  let response;
  try {
    const new_user = await User.register({
      username
    }, password);
    
  } catch (e) {
    if (e.name === 'UserExistsError') {
      //throw validation error
    }
    console.log('blea', { e })
  }


  res.send(200);
}))

router.post('/login', passport.authenticate('local'), asyncHandler(async (req, res) => {
  const user = await req.user.toAuthJSON();
  console.log('user\n\n\n', user)
  res.json(user);
}));

router.get('/logout', (req, res) => {
  //also need to delete session
  req.logout();
  res.json({ user: null });
})

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.send(403, '401 Unauthorized');
}

module.exports = router;

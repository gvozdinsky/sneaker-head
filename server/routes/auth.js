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
    passport.authenticate("local")(req, res, function () {
      // redirect user or do whatever you want
      console.log('login after reg\n\n\n', req.user);
      res.send(200);
    });

  } catch (e) {
    console.log('err', e);
    res.status(403).json(e.message);
  }
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
  res.send(401, '401 Unauthorized');
}

module.exports = router;

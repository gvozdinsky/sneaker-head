const createError = require('http-errors');

const loginRequired = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  next(createError(401));
}

module.exports = {
  loginRequired
}
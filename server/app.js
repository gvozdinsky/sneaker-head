const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const User = require("./models/user");
const LocalStrategy = require("passport-local");
const MongoStore = require('connect-mongo')(session);
const seeder = require('./seeds');

const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const productsRouter = require('./routes/products');
const cartRouter = require('./routes/cart');
const indexRouter = require('./routes/index');

const app = express();

//set mongodb connection
const connectionString = 'mongodb://dima2395:dimastii1@ds141720.mlab.com:41720/sneaker-head';
const dbOptions = {
  socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 }
}

console.log('connectString', connectionString);
mongoose.connect(connectionString);
var conn = mongoose.connection;

conn.on('error', console.error.bind(console, 'connection error:'));

conn.once('open', function () {
  // seeder();
  app.use(session({
    secret: "top secret",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({
      mongooseConnection: mongoose.connection
    })
  }))

  //passport
  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(User.createStrategy());
  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());


  // view engine setup
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'jade');

  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));

  // routers
  app.use('/users', usersRouter);
  app.use('/auth', authRouter);
  app.use('/products', productsRouter);
  app.use('/cart', cartRouter);
  app.use('/', indexRouter);

  // catch 404 and forward to error handler
  app.use(function (req, res, next) {
    next(createError(404));
  });

  // error handler
  app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.json(err)
    // res.render('error');
  });
});



//session


module.exports = app;

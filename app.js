const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const session = require("express-session");

const passport = require('./auth/passport');

const indexRouter = require('./routes/index');
const analyticsRouter = require('./routes/analytics');
const usersRouter = require('./components/auth/users');
const productsRouter = require('./components/products/products');
const customersRouter = require('./components/customers/customersRouter');
const ordersRouter = require('./components/orders/ordersRouter');
const adminsRouter = require('./components/admins/adminsRouter');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true}).then(()=>
{
  console.log('Database connected');
}).catch((error)=>{
  console.log('Error to connect database');
})

const app = express();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
app.set('views', [__dirname + '/views', __dirname + '/components']);
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: process.env.SESSION_SECRET, resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.use( function(req,res,next){
  res.locals.admin = req.admin;
  next();
});

app.use('/dashboard', indexRouter);
app.use('/', usersRouter);
app.use('/products', productsRouter);
app.use('/customers', customersRouter);
app.use('/orders', ordersRouter);
app.use('/admins', adminsRouter);
app.use('/analytics', analyticsRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.render('404', {layout: '404.hbs'});
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

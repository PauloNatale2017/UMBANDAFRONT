"use strict"

const createError = require("http-errors");
const express = require("express");
const path = require("path");
const morgan = require("morgan");

var cookieParser = require('cookie-parser');
const cors = require('cors');
var session = require('express-session')

const port = process.env.PORT || 3000;

const app = express();

app.use(session({
  secret: '2C44-4D44-WppQ38S',
  resave: true,
  saveUninitialized: true
}));

var middlewareRouter  = express.Router();

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')));

app.use('/css',express.static('public/css'))
app.use('/scss',express.static('public/scss'))
app.use('/fonts',express.static( 'public/fonts'))
app.use('/images',express.static('public/images'))
app.use('/js',express.static('public/js'))
app.use('/json',express.static('public/json'))


app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization')
  app.use(cors()); 
  next()
});

app.use(cors());

var homeRouter = require('./routes/home')

app.use('/home',homeRouter);

app.listen(port , err => {  
    console.log(`Listening on port ${port}`)     
});

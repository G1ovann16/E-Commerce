const createError = require('http-errors');
const path = require('path');
// const cookieParser = require('cookie-parser');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');


mongoose.connect('mongodb://localhost:27017/shop',{useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Conexion exitosa')
});

// var indexRouter = require('./routes/index');

var app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/bicicletas', bicisRouter);


module.exports = app;
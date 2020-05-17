const path = require('path');
// const cookieParser = require('cookie-parser');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require("./config/key");

mongoose.connect(config.mongoURI,
  {
    useNewUrlParser: true, useUnifiedTopology: true,
    useCreateIndex: true, useFindAndModify: false
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

const OrderRoutes = require('./routes/orders');
const UserRoutes = require('./routes/users');
const ProductsRoutes = require('./routes/product');

const app = express();

app.use(express.json());


app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));//no se para q
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); //no se para q

app.use('/order', OrderRoutes);
app.use('/product', ProductsRoutes);
app.use('/users', UserRoutes);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server Listening on ${port}`)
});
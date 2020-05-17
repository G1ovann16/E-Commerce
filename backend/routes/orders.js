const router = require('express').Router();
const OrderController = require('../controller/OrderController');
const { authentication, is } = require('../midleware/authentication');

router.post('/', authentication, is(['user']), OrderController.addOrder);

module.exports = router


const router = require('express').Router();
const ProductController = require('../controller/ProductController');
const { authentication, is } = require('../middleware/authentication')

router.get('/', ProductController.getAll);
router.post('/', authentication, is(['seller']), ProductController.insert);

module.exports = router
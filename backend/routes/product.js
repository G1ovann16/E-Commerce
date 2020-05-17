const router = require('express').Router();
const ProductController = require('../controller/ProductController');
// const { authentication, is } = require('../middleware/authentication')

router.get('/recently', ProductController.getRec);
router.get('/', ProductController.getAll);
router.get('/:id', ProductController.getById); 
router.get('/:name', ProductController.getById); 
router.post('/',  ProductController.insert);
// authentication, is(['seller']),
module.exports = router
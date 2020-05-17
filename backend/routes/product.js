const router = require('express').Router();
const ProductController = require('../controller/ProductController');
// const { authentication, is } = require('../middleware/authentication')

router.get('/all', ProductController.getAll);
router.get('/:id', ProductController.getById); 
router.get('/', ProductController.getProdRec);
router.get('/:name', ProductController.getById); 
router.post('/',  ProductController.insert);
// authentication, is(['seller']),
module.exports = router
const router = require('express').Router();
const UserController = require('../controller/UserController.js');
const { authentication, is } = require('../middleware/authentication.js')
router.post('/signup', UserController.signup);
router.post('/login', UserController.login);
router.get('/info', authentication, UserController.getUserInfo);
router.get('/recover/:email', UserController.recover);
router.post('/reset', UserController.resetPassword);
router.put('/', authentication, UserController.update);
router.get('/logout', authentication, UserController.logout);
router.get('/', authentication, is(['admin']), UserController.getAll);
router.delete('/:userId', authentication, is(['admin']), UserController.delete);

module.exports = router;
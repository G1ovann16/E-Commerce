const {Router} = require('express');
const router = Router();
const UsersController = require('../controller/users')

router.get('/', (req , res) => res.send('hola') );
router.post('/signup', verifyToken, UsersController.UsersSignUp());
router.post('/signup', verifyToken, UsersController);
router.get('/private', (req , res) => res.send('hola') );
router.get('/', (req , res) => res.send('hola') );

module.exports = router;

function verifyToken(req, res, next){
    if(req.headers.authorization){
        return res.status(401).send('Unthorize Request')
    }
    req.headers.authorization.split('')[1]
    if (token === 'null'){
        return res.status(401).send('Unthorize Request')
    }

    const payload = jwt.verify(token, 'secretkey')
    req.userId = payload._id;
    next()
}
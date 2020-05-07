const jwt = require('jsonwebtoken');
const UserModel = require('../models/User.js');
const authentication = async(req, res, next) => {
        try {
            const token = req.headers.authorization;
            const payload = jwt.verify(token, 'mimamaMeMima');
            const user = await UserModel.findOne({
                _id: payload._id,
                tokens: token
            });
            if (!user) {
                return res.status(401).send({
                    message: 'You are not authorized'
                });
            }
            req.user = user;
            next();
        } catch (error) {
            console.error(error)
            res.status(401).send({
                message: 'You are not authorized',
                error
            })
        }
    }
    //esta función devuelve un middleware en base a los roles que permite la array roles
const is = (roles) => async(req, res, next) => {
    if (!roles.includes(req.user.role)) {
        return res.status(403).send({
            message: 'You are not allowed to access this zone'
        })
    }
    next();
}

module.exports = {
    authentication,
    is
}
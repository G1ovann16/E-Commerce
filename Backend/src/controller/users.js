const {User} = require('../models/user');
const jwt = require('jsonwebtoken');

const UsersController = {
    async UsersSignUp(req,res){
        try{
            const {email, password} = req.body;
            const newUser = new user ({email, password}); 
            await newUser.save();
            const token = jwt.sign({_id: newUser._id}, 'secretKey')
            res.status(200).json({token}) 
        }
        catch(error){
            res.send(error);
        }
    },
    async UsersSignUp(req,res){
        try{
            const {email, password} = req.body;
            const user = await User.findOne({email}); 
            await newUser.save();
            if(!user) return res.status(401).send('The email doesn´t exists')
            if(user.password !== password) return res.status(401).send('wrong password');

            const token = jwt.sign({_id: newUser._id}, 'secretKey')
            return res.status(200).json({token}) 
        }
        catch(error){
            res.send(error);
        }
    }


}

module.exports = UsersController;
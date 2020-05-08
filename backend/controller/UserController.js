const UserModel = require('../models/User.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const transporter = require('../config/nodemailer')
const UserController = {
    getAll(req, res) {
        UserModel.find({})
            .then(users => res.send(users))
    },
    async signup(req, res) {
        try {
            const hash = await bcrypt.hash(req.body.password, 9); 
            req.body.password = hash; 
            req.body.role = "user";
            const user = await UserModel.create(req.body); 
            res.status(201).send({
                message: 'User successfully created',
                user
            });
        } catch (error) {
            console.error(error);
            res.status(500).send({
                message: 'There was a problem trying to sign up'
            })
        }
    },
    async login(req, res) {
        try {
            const user = await UserModel.findOne({
                 //buscamos el usuario por el email, ej: 'user@email.com'
                email: req.body.email
            });
            if (!user) {
                return res.status(400).send({
                    message: 'Wrong credentials'
                });
            }
            const isMatch = await bcrypt.compare(req.body.password, user.password);
            if (!isMatch) {
                return res.status(400).send({
                    message: 'Wrong credentials'
                });
            }
            const token = jwt.sign({
                _id: user._id
            }, 'mimamaMeMima', {
                expiresIn: '2w'
            });
            if (user.tokens.length > 4) user.tokens.shift(); //si ya hay 5 tokens eliminamos el más antiguo
            user.tokens.push(token); //añadimos el token al final del array
            await user.save(); //guarda los cambios en mongoDB
            res.send({
                message: 'Welcome Mr ' + user.email,
                user,
                token
            });
        } catch (error) {
            console.error(error)
            res.status(500).send({
                message: 'There was a problem trying to log in'
            })
        }
    },
    getUserInfo(req, res) {
        res.send(req.user)
    },
    logout(req, res) {
        UserModel.findByIdAndUpdate(req.user._id, {
                $pull: {
                    tokens: req.headers.authorization
                }
            }).then(user => res.send(user))
            .catch(console.error)
    },
    async recover(req, res) {
        try {
            const recoverToken = jwt.sign({email:req.params.email},'recoverSecret',{expiresIn:'48h'})
            const url ="http://localhost:4200/recover/"+recoverToken
            await transporter.sendMail({
                to: req.params.email,
                subject:'Recover your account',
                html:`
                <h3>Recover your account</h3>
                <a href="${url}"></a>
                This link will expire in 48 hours
                `
            })
            res.send({message:'A recovery email was sent to your email address'})
        } catch (error) {

        }
    },
    async resetPassword(req,res){
        try {  
        const recoverToken=req.body.recoverToken;
        const payload = jwt.verify(recoverToken,'recoverSecret')
        const hash = await bcrypt.hash(req.body.password);
        const user = await UserModel.findOneAndUpdate({email:payload.email},{password:hash})
        res.send(user)
        } catch (error) {
            console.error(error);
            res.status(500).send({message:'There was a problem trying to reset the password'})
        }
    },
    async update(req, res) {
        try {
            req.body.role = req.user.role; // sobreescribimos el rol del body de la request por el que hay en la db
            if (req.body.password) {
                //comparamos que la vieja contraseña corresponde a la de MongoD
                const isMatch = await bcrypt.compare(req.body.oldPassword, req.user.password);
                if (!isMatch) return res.status(401).send({ //en caso de no corresponder no actualizamos la contraseña
                    message: 'Wrong credentials'
                })
                req.body.password = await bcrypt.hash(req.body.password, 9);
            }
            //findByIdAndUpdate toman el _id como primer argument y actualiza ese documento con los campos que le pasemos en el segundo argumento
            const user = await UserModel.findByIdAndUpdate(req.user._id, req.body, {
                new: true
            })
            res.send(user)
        } catch (error) {
            console.error(error);
            res.status(500).send(error)
        }
    },
    delete(req, res) {
        // UserModel.findByIdAndDelete()
    }
}

module.exports = UserController;
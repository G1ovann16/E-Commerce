const Product = require('../models/Product');
const Users = require('../models/Users');

const ProductController = {
    
    getAll(req, res) {
        Product.find() //include equivalent
            .then(products => res.status(300).send(products))
            .catch(error => {
                console.error(error);
                res.send(error)
      })
    },

      async getProdRec(req, res) {
        console.log("hola")
        try {
            const productR = await Product.find({"createdAt" : {"$gte": new Date("2020-05-01T00:00:00.000Z")}})
            res.send(productR)
        } catch (error) {
            
            console.error(error);
            res.send(error)
        }
    },
    

    getById(req, res) {
        Product.findById(req.params._id)
            .populate('userId')
            .then(product => res.send(product))
            .catch(error => {
                console.error(error);
                res.send(error)
            })
    },
    getByName(req, res) {
        Product.findById(req.params._name)
            .then(product => res.send(product))
            .catch(error => {
                console.error(error);
                res.send(error)
            })
    },
    insert(req, res) {
        console.log('asdsad', req.body, req.user);
        // req.body.userId = req.Users._id
        Product.create(req.body)
            .then(product => res.status(201).send(product))
            .catch(error => {
                console.error(error);
                res.send(error)
            })
    }

    
}
module.exports = ProductController
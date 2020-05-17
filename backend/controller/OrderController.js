const Orders = require('../models/Orders');

const OrderController = {
        async addOrder(req, res) {
            try {
                req.body.userId = req.user._id
                const order = await Orders.create({
                    ...req.body, 
                    status: "pending",
                    deliveryDate: new Date(),
                    UserId: req.user._id})
                    res.status(201).send(order)
            } catch (error) {
                console.error(error)
            }
        },
}
module.exports = OrderController
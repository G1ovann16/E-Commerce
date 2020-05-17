const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;
const OrdersSchema = new mongoose.Schema({
    status: {
        type: String,
        // required:[true, 'El campo nombre es requerido']
    }, 
    price:{
        type: Number,
        // required:[true, 'El campo nombre es requerido']
    },
    stock:{
        type: Number,
        // required:[true, 'El campo nombre es requerido']
    },
    deliveryDate: Date,
    UserId: String,
    // total??
    productIds: [{
        _id:{
            type: ObjectId,
            ref: 'Product',
        },
        unit: Number,
        subtotal: Number
    }],
});

const Orders= mongoose.model('Orders', OrdersSchema);
module.exports = Orders;
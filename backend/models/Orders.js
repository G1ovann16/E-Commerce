const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;
const OrdersSchema = new mongoose.Schema({
    status: {
        type: String,
        required:[true, 'El campo nombre es reqiuererido']
    },
    description: {
        type: String,
        required:[true, 'El campo nombre es reqiuererido']
    },
    price:{
        type: Number,
        required:[true, 'El campo nombre es reqiuererido']
    },
    imagen: {
        type: String,
        required:[true, 'El campo nombre es reqiuererido']
    },
    stock:{
        type: Number,
        required:[true, 'El campo nombre es reqiuererido']
    },
    ordersIds:[ObjectId]
});

const Orders= mongoose.model('Orders', OrdersSchema);
module.exports = OrdersModel;
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    role: {
        type: String,
        enum: ['admin', 'user', 'seller']
    },
    tokens: [String],
}, {
    timestamps: true
});
const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;
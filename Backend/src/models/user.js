const mongoose, {Schema, model} = require('mongoose');

const userSchema = new Schema({
    email: String,
    password: String
});

const User = mongoose.model('User', userSchema);
module.exports = User;
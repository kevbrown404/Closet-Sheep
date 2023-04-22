const mongoose = require('mongoose')

//create listing Schema blueprint
const userSchema = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 6 },
    listings: [{ type: mongoose.Schema.Types.ObjectId, ref: "Listing" }]
}) 

const User = mongoose.model('User', userSchema, 'users')

module.exports = { User }
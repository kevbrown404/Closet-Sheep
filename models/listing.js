const mongoose = require('mongoose')

//create listing Schema blueprint
const listingSchema = mongoose.Schema({
    title: { type: String, required: true }, 
    description: { type: String, required: true },
    size: { type: String, required: true },
    price: { type: String, required: true },
    // thumbnail: { type: String, required: true}, 
    image: {type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' }
})

const Listing = mongoose.model('Listing', listingSchema, 'listings')

module.exports = { Listing }
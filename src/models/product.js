const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    quantity: {
        type: Number,
        required: true,
        validate(value) {
            if (value < 1) {
                throw new Error('Quantity cannot be less than 1')
            }
        }
    },
    category: {
        type: String
    },
    manufacturer: {
        type: String
    },
    supplier: {
        type: String
    },
    unit_price: {
        type: Number,
        required: true
    },

    ratings: {
        type: Number,
        default: 1
    },
    status: {
        type: Boolean,
        default: true
    },
    image: {
        type: Buffer
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
}, { timestamps: true })

const Product = mongoose.model('Product', productSchema);

module.exports = Product
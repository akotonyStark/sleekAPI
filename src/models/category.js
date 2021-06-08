const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
        name: {
            type: String,
            trim: true
        },
        description: {
            type: String,
            trim: true
        }
    },

    { timestapms: true }
)

const Category = mongoose.model('Category', categorySchema)
module.exports = Category
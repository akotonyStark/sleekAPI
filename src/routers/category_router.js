const express = require('express')
const Category = require('../models/category')

const router = express.Router()

// POST ADD CATEGORY
router.post('/category', async(req, res) => {
    const category = new Category(req.body)

    try {
        await category.save()
        res.status(200).send(category)
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router
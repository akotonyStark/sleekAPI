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


// GET ALL CATEGORY
router.get('/category', async(req, res) => {
    const category = await Category.find({})

    try {
        if (!category) {
            return res.status(404).send()
        }
        res.status(200).send(category)
    } catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router
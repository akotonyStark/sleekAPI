const express = require('express')
const Category = require('../models/category')

const router = express.Router()

/**
 * @swagger
 * /Category:
 *   post:
 *      description: Add new category 
 *      responses:
 *         201:
 *           description: Success
 */
router.post('/category', async(req, res) => {
    const category = new Category(req.body)

    try {
        await category.save()
        res.status(201).send(category)
    } catch (e) {
        res.status(400).send(e)
    }
})


/**
 * @swagger
 * /Category:
 *   get:
 *     description: Get All Categories
 *     responses:
 *       200: 
 *         description: Success
 */
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

/**
 * @swagger
 * /Category/id:
 *   delete:
 *      description: Delete a Category 
 *      parameters:
 *        - name: id
 *          required: true
 *      responses:
 *         200:
 *           description: Success
 *         404:
 *           description: Not found
 */
router.delete('/category/:id', async(req, res) => {
    const category = await Category.findByIdAndDelete(req.params.id)
    try {
        if (!product) {
            return res.status(404).send()
        }
        res.status(200).send(category)
            //await req.product.remove()
            //res.send(req.product)
    } catch (e) {
        console.log(e)
        res.status(500).send()
    }
})

/**
 * @swagger
 * /Category:
 *   delete:
 *      description: Delete All Categories 
 *      responses:
 *         200:
 *           description: Success
 *         404:
 *           description: Not found
 */
router.delete('/category', async(req, res) => {
    const category = await Category.deleteMany({})
    try {
        if (!product) {
            return res.status(404).send()
        }
        //await req.product.remove()
        res.status(200).send(category)
    } catch (e) {
        console.log(e)
        res.status(500).send()
    }
})


module.exports = router
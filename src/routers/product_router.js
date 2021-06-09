const express = require('express')
const Product = require('../models/product')

const router = new express.Router()


/**
 * @swagger
 * /Products:
 *   post:
 *      description: Add new Product 
 *      responses:
 *         201:
 *           description: Success
 */
router.post('/products', async(req, res) => {
    const product = new Product(req.body)
    try {
        await product.save()
        res.status(201).send(product)
    } catch (e) {
        res.status(400).send(e)
    }
});


/**
 * @swagger
 * /Products:
 *   get:
 *      description: Get All Products 
 *      responses:
 *         200:
 *           description: Success
 *         404:
 *           description: Not found
 */
router.get('/products', async(req, res) => {
    try {
        const products = await Product.find({})
        if (!products) {
            return res.send(404).send()
        }
        res.status(200).send(products)
    } catch (e) {
        res.status(500).send()
        console.log(e)
    }
});

/**
 * @swagger
 * /Products/id:
 *   delete:
 *      description: Delete a Product 
 *      parameters:
 *        - name: id
 *          required: true
 *      responses:
 *         200:
 *           description: Success
 *         404:
 *           description: Not found
 */
router.delete('/products/:id', async(req, res) => {
    const product = await Product.findByIdAndDelete(req.params.id)
    try {
        if (!product) {
            return res.status(404).send()
        }
        res.status(200).send(product)
            //await req.product.remove()
            //res.send(req.product)
    } catch (e) {
        console.log(e)
        res.status(500).send()
    }
})

/**
 * @swagger
 * /Products:
 *   delete:
 *      description: Delete All Products 
 *      responses:
 *         200:
 *           description: Success
 *         404:
 *           description: Not found
 */
router.delete('/products', async(req, res) => {
    const product = await Product.deleteMany({})
    try {
        if (!product) {
            return res.status(404).send()
        }
        //await req.product.remove()
        res.status(200).send(product)
    } catch (e) {
        console.log(e)
        res.status(500).send()
    }
})


module.exports = router
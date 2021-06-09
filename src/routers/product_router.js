const express = require('express')
const Product = require('../models/product')

const router = new express.Router()

router.post('/products', async(req, res) => {
    const product = new Product(req.body)
    try {
        await product.save()
        res.status(201).send(product)
    } catch (e) {
        res.status(400).send(e)
    }
});


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

const express = require('express')
const productRouter = require('./src/routers/product_router')
const categoryRouter = require('./src/routers/category_router')
require('./src/db/mongoose')
require('env-cmd')


const app = express()
const port = process.env.PORT || 3001


app.use(express.json())
app.use(productRouter)
app.use(categoryRouter)

app.listen(port, () => {
    console.log('Listening to sleek api on port: ', port)
})
const express = require('express')
const productRouter = require('./src/routers/product_router')
const categoryRouter = require('./src/routers/category_router')
require('./src/db/mongoose')
require('env-cmd')
const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')


const app = express()
const port = process.env.PORT || 3001


//swagger config
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Sleek Collections API',
            version: '1.0.0'
        }
    },
    apis: ['index.js']
}
const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs))


app.use(express.json())
app.use(productRouter)
app.use(categoryRouter)

app.listen(port, () => {
    console.log('Listening to sleek api on port: ', port)
})
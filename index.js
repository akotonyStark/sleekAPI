const express = require('express')
const productRouter = require('./src/routers/product_router')
const categoryRouter = require('./src/routers/category_router')
require('./src/db/mongoose')
require('env-cmd')
const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')
const swaggerOptions = require('./swagger.json')
//const cors = require('cors')

const app = express()
//app.use(cors())

const port = process.env.PORT || 3001
console.log(process.env.NODE_ENV)

const swaggerDocs = swaggerJSDoc(swaggerOptions)
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs))

app.use(express.json())
app.use(productRouter)
app.use(categoryRouter)

app.listen(port, () => {
  console.log('Listening to sleek api on port: ', port)
})

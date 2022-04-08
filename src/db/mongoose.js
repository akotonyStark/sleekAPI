const mongoose = require('mongoose')

//const MONGODB_URL = 'mongodb://127.0.0.1:27017/sleekcollections'
const MONGODB_URL =
  process.env.MONGODB_URL ||
  'mongodb+srv://akotonyStark:Loki2020@cluster0.4n1nv.mongodb.net/sleekcollections'

mongoose.connect(MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
})

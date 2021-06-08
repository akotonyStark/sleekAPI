const mongoose = require('mongoose')

//const MONGODB_URL = 'mongodb://127.0.0.1:27017/sleekcollections'
const MONGODB_URL = process.env.MONGODB_URL


mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});
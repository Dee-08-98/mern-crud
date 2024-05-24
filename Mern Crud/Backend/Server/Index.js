const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const  route  = require('./Routes/UserRoute.js')

const app = express()
app.use(express.json())
app.use(cors())

dotenv.config()

const port = process.env.port || 7777
const url = process.env.mongooseURL

app.use('/api',route)


mongoose.connect(url)
    .then(() => {
        console.log('db connected');
        app.listen(port,()=>{
            console.log(`Server is running on port ${port}`);
        })
    })
    .catch((err) => {
        console.log(err);
    })

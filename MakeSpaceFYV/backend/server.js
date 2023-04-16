const express = require('express')
const path = require('path')
require('dotenv').config({path: path.resolve(__dirname, './.env')})

const connectDB = require('./config/db')
const port = process.env.PORT || 5000
const {errorHandler} = require('./middleware/errorMiddleware')


connectDB()
const app = express()
console.log(process.env.PORT)

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/owners', require('./routes/ownerRoutes'))
// app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`server started on port ${port}`))
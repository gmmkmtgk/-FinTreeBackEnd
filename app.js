require('dotenv').config()

const express = require('express')
const productRoutes = require('./routes/product')

// express app
const app = express()

// middleware
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.get('/', (req, res) => {
  res.json({mssg: 'Welcome to the app'})
})
app.use('/api/product', productRoutes)

// listen for requests
app.listen(process.env.PORT, () => {
  console.log('listening on port', process.env.PORT)
})
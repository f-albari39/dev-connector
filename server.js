const express = require('express')
const connectDb = require('./config/db')

const app = express()

// Connect Database
connectDb()

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`)
})

app.get('/', (req, res) => {
  res.send("Api running")
})
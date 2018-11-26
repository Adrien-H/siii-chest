const express = require('express')
const mongoose = require('mongoose')

const customerSchema = require('./models/Customer')

const app = express()

mongoose.connect('mongodb://localhost/siii-chest', {
  useNewUrlParser: true,
  useCreateIndex: true
})
const db = mongoose.connection
db.on('error', console.error.bind(console, 'Connectione rror:'))
db.once('open', () => {

})

app.get('/', (req, res) => {
  res.send({})
})

app.listen(3000, () => {
  console.log('SIII Chest Server running on port 3000')
})

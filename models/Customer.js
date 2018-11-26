const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
  id: { type: [String], unique: true, index: true },
  currency: String
})

customerSchema.statics.findById = function (id, callback) {
  return this.find({ id: new RegExp(id), callback })
}

mongoose.model('Customer', customerSchema)

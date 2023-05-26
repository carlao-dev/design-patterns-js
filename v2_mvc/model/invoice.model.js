const mongoose = require('mongoose')
const Schema = mongoose.Schema

const InvoiceSchema = new Schema({
  dueDate: {
    type: Date,
    required: [true, 'Invoice DueDate is required']
  },
  balance: {
    type: Number,
    required: [true, 'Invoice Balance is required']
  },
  docNumber: {
    type: String,
    required: [true, 'Invoice DocNumber is required']
  },
  status: {
    type: String,
    required: [true, 'Invoice Status is required']
  },
  type: {
    type: String,
    required: [true, 'Invoice Status is required']
  },
  products: [Object]
})

module.exports = mongoose.model('Invoice', InvoiceSchema)

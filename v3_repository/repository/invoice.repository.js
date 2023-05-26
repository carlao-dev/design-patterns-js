const mongoose = require('mongoose')
const { MONGODB_URL = 'mongodb://localhost:27017/invoiceDb' } = process.env

const invoiceModel = require('../model/invoice.model')

class InvoiceRepository {
  constructor () {
    mongoose.connect(MONGODB_URL, { useNewUrlParser: true })
  }

  createInvoice (invoice) {
    return invoiceModel.create(invoice)
  }
}

module.exports = new InvoiceRepository()

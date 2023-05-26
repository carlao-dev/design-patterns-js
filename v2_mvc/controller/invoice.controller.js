const mongoose = require('mongoose')
const { MONGODB_URL = 'mongodb://localhost:27017/invoiceDb' } = process.env
const InvoiceModel = require('../Model/invoice.model')

module.exports = async (req, res) => {
  try {
    const db = await mongoose.connect(MONGODB_URL, { useNewUrlParser: true })

    let body = req.body

    if (!body.balance && body.balance <= 0) throw 'invalid balance'

    if (!body.products || body.products.length <= 0) throw 'invalid products'

    const invoice = await InvoiceModel.create(body)

    res.send({
      statusCode: 200,
      data: {
        message: 'Success',
        invoice
      }
    })
  } catch (error) {
    console.log(error)

    res.send({
      statusCode: 500,
      data: {
        message: 'Error',
        error
      }
    })
  }
}

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { MONGODB_URL = 'mongodb://localhost:27017/invoiceDb' } = process.env

const app = express()
const port = 3000

app.use(cors({ origin: '*' }))
app.use(express.json())

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
  products: [Object]
})

const InvoiceModel = mongoose.model('Invoice', InvoiceSchema)

app.post('/createInvoice', async (req, res) => {
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
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

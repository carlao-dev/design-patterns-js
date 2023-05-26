const express = require('express')
const cors = require('cors')
const invoiceController = require('./Controller/invoice.controller')

const app = express()
const port = 3000

app.use(cors({ origin: '*' }))
app.use(express.json())

app.post('/createInvoice', invoiceController)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

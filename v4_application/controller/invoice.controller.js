const invoiceApplication = require('../application/application.service')

module.exports = async (req, res) => {
  try {
    let body = req.body

    if (!body.balance && body.balance <= 0) throw 'invalid balance'

    if (!body.products || body.products.length <= 0) throw 'invalid products'

    const invoice = await invoiceApplication.createInvoice(body)

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

const invoiceApplication = require('../application/application.service')
const responseHttpFactory = require('../factory/responseHttp.factory')

module.exports = async (req, res) => {
  try {
    let body = req.body

    const invoice = await invoiceApplication.createInvoice(body)

    res.status(201).send(responseHttpFactory.response('success', invoice))
  } catch (error) {
    console.log(error)
    return res.status(500).send(responseHttpFactory.response('Error', error))
  }
}

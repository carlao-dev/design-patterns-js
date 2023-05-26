const invoiceRepository = require('../repository/invoice.repository')

class InvoiceService {
  async createInvoice (invoice) {
    let validationStrategy = require('../strategy/validationInvoiceStrategy')[
      invoice.type
    ]

    let validation = await validationStrategy.validate(invoice)

    return invoiceRepository.createInvoice(invoice)
  }
}

module.exports = new InvoiceService()

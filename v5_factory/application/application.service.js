const invoiceRepository = require('../repository/invoice.repository')

class InvoiceService {
  async createInvoice (invoice) {
    return invoiceRepository.createInvoice(invoice)
  }
}

module.exports = new InvoiceService()

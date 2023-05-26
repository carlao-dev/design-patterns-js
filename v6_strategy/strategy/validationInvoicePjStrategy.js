const Joi = require('joi')

const invoiceSchema = Joi.object().keys({
  balance: Joi.number().required().min(10000),
  products: Joi.array().min(5).required(),
  dueDate: Joi.date().required(),
  docNumber: Joi.string().required(),
  status: Joi.string().required(),
  type: Joi.string()
})

class ValidateInvoicePjSchema {
  static validate (invoice) {
    var result = invoiceSchema.validate(invoice)

    if (result.error) throw new Error(result.error)
  }

  static print () {
    console.log('PJ')
  }
}

module.exports = ValidateInvoicePjSchema

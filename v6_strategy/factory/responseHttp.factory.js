class ResponseHttpFactory {
  static response (message, body) {
    return {
      data: {
        message,
        body
      }
    }
  }
}

module.exports = ResponseHttpFactory

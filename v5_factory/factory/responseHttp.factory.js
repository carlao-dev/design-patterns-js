class ResponseHttpFactory {
  static response (message, body) {
    return {
      body: {
        message,
        body
      }
    }
  }
}

module.exports = ResponseHttpFactory

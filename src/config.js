module.exports = {
    port: 4000,
    jwtSecret: '!!CryptoCat@!!',
    jwtExpirationInSeconds: 60 * 60, // 1 hour
    roles: {
      USER: 'user',
      ADMIN: 'admin'
    },
    productPriceUnits: {
      DOLLAR: 'dollar',
      EURO: 'euro',
      INR: 'inr'
    },
    statusCodes: {
        "BadRequest": 400,
        "Unauthorized": 401,
        "NotFound": 404,
        "NotAcceptable": 406,
        "Duplicate": 409
    },
    data: {}
  }
const authController = require('./controller')

module.exports = ({ router }) => router

  .post('/auth/register', authController.register)

  .post('/auth/login', authController.login)

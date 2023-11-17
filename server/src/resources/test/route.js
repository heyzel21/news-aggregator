const testController = require('./controller')

module.exports = ({ router }) => router

  .get('/test/test', testController.test)

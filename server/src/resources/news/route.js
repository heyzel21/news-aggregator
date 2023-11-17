const newsController = require('./controller')

module.exports = ({ router }) => router

  .post('/news/create', newsController.create)

  .get('/news', newsController.list)

  .get('/news/:id', newsController.find)

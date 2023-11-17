const newsService = require('./service')
// const authHelper = require('./helper')

module.exports = {
  async create (ctx) {
    try {
      const request = ctx.request.body

      const response = await newsService.store({ body: request })

      if (response) {
        ctx.status = 200
        ctx.body = 'News posted!'
      }
    } catch (error) {
      console.log(error)
      ctx.body = error.code
      ctx.status = 500
    }
  },

  async list (ctx) {
    try {
      const response = await newsService.list()

      ctx.body = response
    } catch (error) {
      console.log(error)
    }
  },

  async find (ctx) {
    const request = ctx.request.params
    try {
      const response = await newsService.find({ body: request })

      ctx.body = response
    } catch (error) {
      console.log(error)
    }
  }
}

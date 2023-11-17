const knex = require('../../../knexFile')

module.exports = {
  async find ({ body }) {
    const [id] = await knex('news').where(body)

    return id
  }
}

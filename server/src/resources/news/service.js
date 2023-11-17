const knex = require('../../../knexFile')

module.exports = {
  async store ({ body }) {
    const [id] = await knex('news').insert(body)

    return id
  },

  async list () {
    const list = await knex('news')

    return list
  },

  async find ({ body }) {
    // const [{ id, userId }] = await knex('news').where(body)
    const id = await knex('news').where(body).first()
    const { username } = await knex('users').where({ id: id.userId }).first()

    return { ...id, username }
  }
}

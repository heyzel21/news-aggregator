const Joi = require('joi')
const authService = require('./service')
const authHelper = require('./helper')

module.exports = {
  // async register (ctx) {
  //   const schema = Joi.object({
  //     username: Joi.string().min(6).required(),
  //     password: Joi.string().min(8).required(),
  //     firstName: Joi.string().min(3).required(),
  //     lastName: Joi.string().min(3).required(),
  //     age: Joi.number().required(),
  //     gender: Joi.string().required(),
  //     city: Joi.string().required()
  //   })

  //   try {
  //     const request = await schema.validateAsync(ctx.request.body)

  //     const exist = await authHelper.find({ body: { username: request.username } })

  //     if (exist) {
  //       ctx.body = 'Username is already used'
  //       ctx.status = 403
  //       return
  //     }

  //     const response = await authService.store({ body: request })

  //     if (response) {
  //       ctx.status = 200
  //       ctx.body = 'Registration completed!'
  //     }
  //   } catch (error) {
  //     ctx.body = error.details[0].message
  //     ctx.status = 500
  //   }
  // },

  async register (ctx) {
    try {
      const request = ctx.request.body

      const response = await authService.store({ body: request })

      if (response) {
        ctx.status = 200
        ctx.body = 'Registration completed!'
      }
    } catch (error) {
      // ctx.body = error.details[0].message
      ctx.body = error.code
      ctx.status = 500
    }
  },

  async login (ctx) {
    try {
      const request = ctx.request.body

      const user = await authHelper.find({ body: request })

      if (!user) {
        ctx.body = 'Incorrect username/password'
        ctx.status = 404
        return
      }

      if (user) {
        const { password, ...others } = user
        ctx.body = others
      }
    } catch (error) {
      ctx.body = error
    }
  }
}

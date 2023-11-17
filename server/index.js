require('dotenv').config()

const Koa = require('koa')
const app = new Koa()
const PORT = 8700

const Router = require('koa-router')
const router = new Router()

const cors = require('@koa/cors')
const bodyparser = require('koa-bodyparser')

const authRoute = require('./src/resources/auth/route')
const newsRoute = require('./src/resources/news/route')

authRoute({ router })
newsRoute({ router })

app.use(cors())
app.use(bodyparser())

app.use(router.routes())

app.listen(PORT, () => console.log(`app is running on port ${PORT}`))

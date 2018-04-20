const Koa = require('koa2')
const views = require('koa-views')
const path = require('path')
const static = require('koa-static')
const app = new Koa()

const staticPath = './'

app.use(static(
  path.join( __dirname,  staticPath)
))


app.use(views(path.join(__dirname, './'), {
  extension: 'html'
}))

app.use( async ( ctx ) => {
  await ctx.render('index')
})

app.listen(888)



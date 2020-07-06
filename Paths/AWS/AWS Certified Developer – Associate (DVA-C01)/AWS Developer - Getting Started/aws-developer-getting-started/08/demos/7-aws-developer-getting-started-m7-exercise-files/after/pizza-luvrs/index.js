const Hapi = require('@hapi/hapi')

const plugins = require('./plugins')
const routes = require('./routes')

async function startServer () {
  const server = Hapi.Server({
    port: 3000,
    cache: [
      {
        name: 'redis',
        provider: {
          constructor: require('@hapi/catbox-redis'),
          options: {
            partition: 'cache',
            host: 'pizza-cluster.majerf.0001.usw2.cache.amazonaws.com'
          }
        }
      }
    ]
  })

  await plugins.register(server)
  routes.register(server)

  try {
    await server.start()
    console.log(`Server running at: ${server.info.uri}`)
  } catch (err) {
    console.error(`Server could not start. Error: ${err}`)
  }
}

process.on('unhandledRejection', err => {
  console.log(err)
  process.exit()
})

startServer()

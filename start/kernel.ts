import server from '@adonisjs/core/services/server'

server.middleware.register([
  () => import('@adonisjs/core/bodyparser_middleware'),
  () => import('@adonisjs/session/session_middleware'),
])

server.middleware.registerNamed({})

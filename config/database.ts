import app from '@adonisjs/core/services/app'
import { defineConfig } from '@adonisjs/lucid/build/config'

export default defineConfig({
  connection: app.env.get('DB_CONNECTION', 'pg'),
  connections: {
    pg: {
      client: 'pg',
      connection: {
        host: app.env.get('DB_HOST'),
        port: app.env.get('DB_PORT'),
        user: app.env.get('DB_USER'),
        password: app.env.get('DB_PASSWORD'),
        database: app.env.get('DB_DATABASE'),
      },
      migrations: {
        naturalSort: true,
      },
      healthCheck: true,
    },
  },
})

import { defineConfig } from '@adonisjs/core/env'

export default defineConfig({
  variables: {
    APP_KEY: {
      type: 'string',
    },
    NODE_ENV: {
      type: 'string',
      choices: ['development', 'test', 'production'],
      default: 'development',
    },
    HOST: {
      type: 'string',
      default: '0.0.0.0',
    },
    PORT: {
      type: 'number',
      default: 3333,
    },
    SESSION_DRIVER: {
      type: 'string',
      default: 'cookie',
    },
    DB_CONNECTION: {
      type: 'string',
      default: 'pg',
    },
    DB_HOST: {
      type: 'string',
      default: '127.0.0.1',
    },
    DB_PORT: {
      type: 'number',
      default: 5432,
    },
    DB_USER: {
      type: 'string',
      default: 'postgres',
    },
    DB_PASSWORD: {
      type: 'string',
      nullable: true,
    },
    DB_DATABASE: {
      type: 'string',
      default: 'wall_of_voices',
    },
  },
})

import { defineConfig } from '@adonisjs/core/app'

export default defineConfig({
  app: {
    keys: true,
    preloads: [
      () => import('#start/kernel')
    ],
    providers: [
      () => import('@adonisjs/session/session_provider'),
      () => import('@adonisjs/view/provider'),
      () => import('@adonisjs/vite/vite_provider'),
      () => import('@adonisjs/lucid/database_provider')
    ],
    commands: [
      () => import('@adonisjs/lucid/commands')
    ],
  },
  tests: {
    suites: [],
  },
})

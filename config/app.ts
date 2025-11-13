import app from '@adonisjs/core/services/app'

export default {
  appKey: app.env.get('APP_KEY'),
  http: {
    cookie: {
      domain: '',
      path: '/',
      sameSite: 'lax' as const,
    },
  },
}

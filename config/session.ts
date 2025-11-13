import app from '@adonisjs/core/services/app'
import { sessionConfig } from '@adonisjs/session/build/config'

const sessionKey = app.env.get('APP_KEY')

export default sessionConfig({
  driver: app.env.get('SESSION_DRIVER', 'cookie'),
  cookieName: 'wall_of_voices_session',
  cookie: {
    secure: app.env.get('NODE_ENV') === 'production',
    sameSite: 'lax',
  },
  secret: sessionKey,
})

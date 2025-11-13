import app from '@adonisjs/core/services/app'
import { edgeConfig } from '@adonisjs/view/build/config'

export default edgeConfig({
  cache: app.env.get('NODE_ENV') === 'production',
})

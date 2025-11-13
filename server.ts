import 'reflect-metadata'
import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'
import { IgnitorFactory } from '@adonisjs/core/factories'

const appRoot = dirname(fileURLToPath(import.meta.url))

await IgnitorFactory.create(appRoot).httpServer().start()

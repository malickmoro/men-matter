import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Message extends BaseModel {
  public static table = 'messages'

  @column({ isPrimary: true })
  declare id: number

  @column({ columnName: 'user_id' })
  declare userId: string

  @column()
  declare type: 'praise' | 'issue'

  @column()
  declare content: string

  @column.dateTime({ columnName: 'created_at', autoCreate: true })
  declare createdAt: DateTime
}

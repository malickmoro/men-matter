import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Message from '#app/Models/Message'
import { DateTime } from 'luxon'

export default class MessageSeeder extends BaseSeeder {
  public async run() {
    await Message.updateOrCreateMany('content', [
      {
        userId: '00000000-0000-0000-0000-000000000001',
        type: 'praise',
        content: 'Grateful for the teammate who always lifts our spirits.',
        createdAt: DateTime.now().minus({ days: 2 }),
      },
      {
        userId: '00000000-0000-0000-0000-000000000002',
        type: 'issue',
        content: 'Feeling overwhelmed balancing family and work lately.',
        createdAt: DateTime.now().minus({ days: 1, hours: 6 }),
      },
      {
        userId: '00000000-0000-0000-0000-000000000003',
        type: 'praise',
        content: 'A quiet thank you to the mentor who listens without judgement.',
        createdAt: DateTime.now().minus({ hours: 8 }),
      },
    ])
  }
}

import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class DatabaseSeeder extends BaseSeeder {
  public async run() {
    await this.call([() => import('./MessageSeeder')])
  }
}

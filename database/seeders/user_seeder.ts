import { UserFactory } from '#database/factories/user_factory'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  public async run() {
    await UserFactory.createMany(10);
    // await User.createMany([
    //   {
    //     name: 'Admin User',
    //     phone: '09789789789',
    //     password: '$2y$10$94p0GbBPoz/x2nJFgR6CaeKkPALvnWQLWXQv99MmCErv2aew.lW7m',
    //     role: 'admin',
    //   },
    //   {
    //     name: 'Writer User',
    //     phone: '09789789788',
    //     password: '$2y$10$94p0GbBPoz/x2nJFgR6CaeKkPALvnWQLWXQv99MmCErv2aew.lW7m',
    //     role: 'writer',
    //   }
    // ])
  }
}

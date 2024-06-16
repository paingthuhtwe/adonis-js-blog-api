import factory from '@adonisjs/lucid/factories'
import User from '#models/user'

export const UserFactory = factory
  .define(User, async ({ faker }) => {
    return {
      name: faker.internet.userName(),
      phone: faker.internet.password(),
      role: 'admin',
      password: faker.internet.password().toString(),
    }
  })
  .build()

import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'
const bcrypt = require('@phc/bcrypt');

export default class UserSeeder extends BaseSeeder {
  public async run () {
    await User.createMany([
      {
        password: await bcrypt.hash('password'),
        email: 'georges.guelton@gmail.com',
        name: "coucou",
        age: 2
      },
      {
        password: await bcrypt.hash('password'),
        email: 'pierre.santos@gmail.com',
        name: "coucou",
        age: 1

      }
    ])
  }
}

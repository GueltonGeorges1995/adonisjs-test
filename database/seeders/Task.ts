import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Task from 'App/Models/Task';
export default class TaskSeeder extends BaseSeeder {
  public async run () {
    await Task.createMany([
      {
        title: "Hit the gym",
        done: false,
      },
      {
        title: "Start coding",
        done: true,
      },
      {
        title: "Eat a pizza",
        done: false,
      },
      {
        title: "Dance until you cant feel your feet anymore",
        done: false,
      },
    ])
  }
}

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import Route from '@ioc:Adonis/Core/Route';



Route.get('/', 'TasksController.index').as('tasks');
Route.post('/tasks', 'TasksController.store');
Route.get('/tasks/:id', "TasksController.show");
Route.patch('/tasks/:id/complete', 'TasksController.updateComplete');
Route.patch('/tasks/:id/title', "TasksController.updateTitle");
Route.delete('/tasks/:id', "TasksController.delete");
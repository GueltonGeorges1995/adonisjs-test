import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import User from 'App/Models/User';

export default class UsersController {
    public async index ({ view } : HttpContextContract) {
        // const users = await User.all();

        // return view.render('pages.User', {users})
        return "coucou"
    }
}

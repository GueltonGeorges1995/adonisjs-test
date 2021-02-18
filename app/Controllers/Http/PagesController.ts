import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PagesController {

    public home ({ view }: HttpContextContract) {
        return view.render('welcome');
    };

    public about ({ params, view }: HttpContextContract){
        const name = params.name;
        return view.render('pages.AboutPage', {name});
    };

    
}

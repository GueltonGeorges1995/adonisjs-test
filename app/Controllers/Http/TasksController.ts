import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Task from "App/Models/Task";
import { schema, rules} from "@ioc:Adonis/Core/Validator";


export default class TasksController {
    public async index ({ view } : HttpContextContract) {
        const tasks = await Task.all();
        return view.render('TasksPageIndex', {tasks})
    }

    public async show ({view, params} :HttpContextContract){
        const task = await Task.findOrFail(params.id)
        return view.render('TasksPageShow', {task})
    }

    public async store ({request, response}: HttpContextContract ){
        const validationSchema = schema.create({
            title: schema.string({trim: true},[
                rules.maxLength(255)
            ])
        })
        const validatedData = await request.validate({
            schema: validationSchema,
            messages: {
                "title.required" : "Enter task title",
                "title.maxLength": "Tasks title can not exceed 255 charactere"
            }
        })
        await Task.create({
            title: validatedData.title,
            done: false
        })
        return response.redirect('back')
    }

    public async updateComplete ({request, response, params}: HttpContextContract) {
        const task = await Task.findOrFail(params.id)
        task.done = !!request.input('completed')          
        await task.save()     
        return response.redirect().back()
    }

    public async updateTitle ({request, response, params}: HttpContextContract) {
        const task = await Task.findOrFail(params.id)
        const validationSchema = schema.create({
            title: schema.string({trim: true},[
                rules.maxLength(255)
            ])
        })
        const validatedData = await request.validate({
            schema: validationSchema,
            messages: {
                "title.required" : "Enter task title",
                "title.maxLength": "Tasks title can not exceed 255 charactere"
            }
        })
        task.title = validatedData.title
        await task.save() 
        return response.redirect().back()
    }

    public async delete ({response, params}: HttpContextContract){
        const task = await Task.findOrFail(params.id)
        await task.delete()
        return response.redirect().back()
    }
    
    
}

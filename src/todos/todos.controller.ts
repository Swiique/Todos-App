import { Body, Controller, Get, Post} from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './interfaces/todo.interface';


//localhost:3000/todos car todos dans le controlleur
@Controller('todos')
export class TodosController {
    constructor(private readonly todosService: TodosService){}

    @Get()
    getTodos(): Todo[] {
        return this.todosService.findAll();
    }

    @Post()
    createTodo(@Body() newTodo) {
        console.log('newTodo', newTodo)
        this.todosService.create(newTodo)
        
    }
}

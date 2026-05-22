import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {

    constructor(private tasksService: TasksService) {}
    @Get()
  getTasks() {
    return this.tasksService.getTasks();
  }
  @Post()
  createTask(@Body() body: any) {
    return{
    message: 'Tarea creada',
    data: body
    };
  }

}

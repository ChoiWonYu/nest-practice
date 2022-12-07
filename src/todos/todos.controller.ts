import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Patch,
  Body,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodo } from './dto/create-todos.dto';
import { UpdateTodos } from './dto/update-todos.dto';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}
  @Get()
  getAll() {
    return this.todosService.getAll();
  }

  @Get('/:id')
  getOne(@Param('id') id: number) {
    return this.todosService.getOne(id);
  }

  @Post()
  create(@Body() todoData: CreateTodo) {
    return this.todosService.create(todoData);
  }

  @Delete('/:id')
  remove(@Param('id') id: number) {
    return this.todosService.deleteOne(id);
  }

  @Patch('/:id')
  patch(@Param('id') id: number, @Body() updateData: UpdateTodos) {
    return this.todosService.update(id, updateData);
  }
}

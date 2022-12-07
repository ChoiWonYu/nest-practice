import { Injectable, NotFoundException } from '@nestjs/common';
import { todo } from './entities/todos.entity';
import { CreateTodo } from './dto/create-todos.dto';
import { UpdateTodos } from './dto/update-todos.dto';

@Injectable()
export class TodosService {
  private todos: todo[] = [];

  getAll() {
    return this.todos;
  }
  getOne(id: number) {
    const toDo = this.todos.find((toDo) => toDo.id === +id);
    if (!toDo) {
      throw new NotFoundException(`wrong id : ${id}`);
    }
    return toDo;
  }

  deleteOne(id: number): boolean {
    this.todos = this.todos.filter((movie) => movie.id !== +id);
    return true;
  }

  create(todoData: CreateTodo) {
    this.todos.push({
      id: this.todos.length + 1,
      ...todoData,
    });
  }

  update(id: number, updateData: UpdateTodos) {
    const todo = this.getOne(id);
    this.deleteOne(id);
    this.todos.push({
      ...todo,
      ...updateData,
    });
  }
}

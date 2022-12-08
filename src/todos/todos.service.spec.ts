import { Test, TestingModule } from '@nestjs/testing';
import { TodosService } from './todos.service';

describe('TodosService', () => {
  let service: TodosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodosService],
    }).compile();

    service = module.get<TodosService>(TodosService);
    service.create({
      action: 'study',
    });
  });

  it('should get a todo', () => {
    const todo = service.getOne(1);
    expect(todo.id).toEqual(1);
  });
  it('should return 404 error', () => {
    try {
      service.getOne(999);
    } catch (e) {
      expect(e.message).toEqual('wrong id : 999');
    }
  });
});

import { AbstractError } from 'src/app/core/error/abstract.error';
import { TodoModel } from 'src/app/core/model';
import { MockTodosService } from '../../services/mock.todos.service';
import { AbstractCreateTodosDataSource } from './data-source/abstract.create.todos.data.source';
import { CreateTodosDataSource } from './data-source/create.todos.data.source';
import { AbstractCreateTodosRepository } from './repository/abstract.create.todos.repository';
import { CreateTodosRepository } from './repository/create.todos.repository';
import { AbstractCreateTodosUseCase } from './use-case/abstract.create.todos.use.case';
import { CreateTodosUseCase } from './use-case/create.todos.use.case';

describe('feature', () => {
  describe('create todos use case', () => {
    let todoService: MockTodosService,
      dataSource: AbstractCreateTodosDataSource,
      repo: AbstractCreateTodosRepository,
      useCase: AbstractCreateTodosUseCase,
      fixture: TodoModel[];

    beforeEach(() => {
      fixture = [{ title: 'todo' }];
      todoService = new MockTodosService();
      fixture.forEach((e) => todoService.add(e));
      dataSource = new CreateTodosDataSource(todoService);
      repo = new CreateTodosRepository(dataSource);
      useCase = new CreateTodosUseCase(repo);
    });

    it('should not return an Error', async (done) => {
      const result = await useCase.execute(fixture);
      expect(result).toBe(fixture);
      done();
    });

    it('should return an Error', async (done) => {
      const result = await useCase.execute(undefined);
      expect(result).toBeInstanceOf(AbstractError);
      done();
    });
  });
});

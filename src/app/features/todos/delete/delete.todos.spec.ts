import { AbstractError } from 'src/app/core/error/abstract.error';
import { TodoModel } from 'src/app/core/model';
import { MockTodosService } from '../../services/mock.todos.service';
import { AbstractDeleteTodoDataSource } from './data-source/abstract.delete.todo.data.source';
import { DefaultDeleteTodoDataSource } from './data-source/default.delete.todo.data.source';
import { AbstractDeleteTodoRepository } from './repository/abstract.delete.todo.repository';
import { DefaultDeleteTodoRepository } from './repository/default.delete.todo.repository';
import { AbstractDeleteTodoUseCase } from './use-case/abstract.delete.todo.use.case';
import { DefaultDeleteTodoUseCase } from './use-case/default.delete.todo.use.case';
describe('feature', () => {
  describe('delete todo use case', () => {
    let todoService: MockTodosService,
      dataSource: AbstractDeleteTodoDataSource,
      repo: AbstractDeleteTodoRepository,
      useCase: AbstractDeleteTodoUseCase,
      fixture: TodoModel;

    beforeEach(() => {
      fixture = { title: 'todo' };
      todoService = new MockTodosService();
      todoService.add(fixture);
      dataSource = new DefaultDeleteTodoDataSource(todoService);
      repo = new DefaultDeleteTodoRepository(dataSource);
      useCase = new DefaultDeleteTodoUseCase(repo);
    });

    it('should not return an Error', async (done) => {
      const result = await useCase.execute(fixture);
      expect(result).toBeUndefined();
      done();
    });

    it('should return an Error', async (done) => {
      const result = await useCase.execute(undefined);
      expect(result).toBeInstanceOf(AbstractError);
      done();
    });
  });
});

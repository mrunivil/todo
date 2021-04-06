import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AbstractError } from 'src/app/core/error/abstract.error';
import { TodoModel } from 'src/app/core/model';
import { environment } from 'src/environments/environment';
import { AbstractDeleteTodoDataSource } from './data-source/abstract.delete.todo.data.source';
import { DefaultDeleteTodoDataSource } from './data-source/default.delete.todo.data.source';
import { AbstractDeleteTodoRepository } from './repository/abstract.delete.todo.repository';
import { DefaultDeleteTodoRepository } from './repository/default.delete.todo.repository';
import { AbstractDeleteTodoUseCase } from './use-case/abstract.delete.todo.use.case';
import { DefaultDeleteTodoUseCase } from './use-case/default.delete.todo.use.case';
describe('feature', () => {
  describe('delete todo use case', () => {
    let httpMock: HttpTestingController,
      dataSource: AbstractDeleteTodoDataSource,
      repo: AbstractDeleteTodoRepository,
      useCase: AbstractDeleteTodoUseCase,
      fixture: TodoModel;

    beforeEach(() => {
      fixture = { title: 'todo1', id: 1 };
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [DefaultDeleteTodoDataSource],
      });
      httpMock = TestBed.inject(HttpTestingController);
      dataSource = TestBed.inject(DefaultDeleteTodoDataSource);
      repo = new DefaultDeleteTodoRepository(dataSource);
      useCase = new DefaultDeleteTodoUseCase(repo);
    });

    it('should not return an Error', () => {
      useCase.execute(fixture).then((result) => {
        expect(result).toBe(fixture);
      });
      const request = httpMock.expectOne(
        `${environment.backendUrl}/${fixture.id}`
      );
      expect(request.request.method).toBe('DELETE');
      expect(request.request.body).toBe(null);
    });

    it('should return an Error', () => {
      useCase
        .execute(undefined)
        .then((result) => expect(result).toBeInstanceOf(AbstractError));
      httpMock.expectNone(environment.backendUrl);
    });
    afterEach(() => {
      httpMock.verify();
    });
  });
});

import { TestBed } from '@angular/core/testing';
import { AbstractError } from 'src/app/core/error/abstract.error';
import { TodoModel } from 'src/app/core/model';
import { AbstractGetTodosDataSource } from './data-source/abstract.get.todos.data.source';
import { GetTodosDataSource } from './data-source/get.todos.data.source';
import { AbstractGetTodosRepository } from './repository/abstract.get.todos.repository';
import { GetTodosRepository } from './repository/get.todos.repository';
import { AbstractGetTodosUseCase } from './use-case/abstract.get.todos.use.case';
import { GetTodosUseCase } from './use-case/get.todos.use.case';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';
describe('feature', () => {
  describe('get todos use case', () => {
    let httpMock: HttpTestingController,
      dataSource: AbstractGetTodosDataSource,
      repo: AbstractGetTodosRepository,
      useCase: AbstractGetTodosUseCase,
      fixture: TodoModel[];

    beforeEach(() => {
      fixture = [{ title: 'todo1', id: 1 }];

      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [GetTodosDataSource],
      });
      httpMock = TestBed.inject(HttpTestingController);
      dataSource = TestBed.inject(GetTodosDataSource);
      repo = new GetTodosRepository(dataSource);
      useCase = new GetTodosUseCase(repo);
    });

    it('should not return an Error', () => {
      useCase.execute().then((result) => {
        expect(result).toBeInstanceOf(Array);
        expect((result as TodoModel[]).length).toBe(1);
        expect(result).toBe(fixture);
      });
      const request = httpMock.expectOne(environment.backendUrl);
      expect(request.request.method).toBe('GET');
      request.flush(fixture);
    });

    it('should return an Error', () => {
      useCase.execute().then((result) => {
        expect(result).toBeInstanceOf(AbstractError);
      });
      const request = httpMock.expectOne(environment.backendUrl);
      expect(request.request.method).toBe('GET');
      request.flush({});
    });

    afterEach(() => {
      httpMock.verify();
    });
  });
});

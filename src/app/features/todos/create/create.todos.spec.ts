import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AbstractError } from 'src/app/core/error/abstract.error';
import { TodoModel } from 'src/app/core/model';
import { environment } from 'src/environments/environment';
import { AbstractCreateTodosDataSource } from './data-source/abstract.create.todos.data.source';
import { CreateTodosDataSource } from './data-source/create.todos.data.source';
import { AbstractCreateTodosRepository } from './repository/abstract.create.todos.repository';
import { CreateTodosRepository } from './repository/create.todos.repository';
import { AbstractCreateTodosUseCase } from './use-case/abstract.create.todos.use.case';
import { CreateTodosUseCase } from './use-case/create.todos.use.case';

describe('feature', () => {
  describe('create todos use case', () => {
    let httpMock: HttpTestingController,
      dataSource: AbstractCreateTodosDataSource,
      repo: AbstractCreateTodosRepository,
      useCase: AbstractCreateTodosUseCase,
      fixture: TodoModel[];

    beforeEach(() => {
      fixture = [{ title: 'todo1', id: 1 }];
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [CreateTodosDataSource],
      });
      httpMock = TestBed.inject(HttpTestingController);
      dataSource = TestBed.inject(CreateTodosDataSource);
      repo = new CreateTodosRepository(dataSource);
      useCase = new CreateTodosUseCase(repo);
    });

    it('should not return an Error', () => {
      useCase.execute(fixture).then((result) => expect(result).toBe(fixture));
      const request = httpMock.expectOne(environment.backendUrl);
      expect(request.request.method).toBe('POST');
      fixture.forEach((e) => expect(request.request.body).toBe(e));
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

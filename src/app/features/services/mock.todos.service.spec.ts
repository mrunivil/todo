import { TestBed } from '@angular/core/testing';

import { MockTodosService } from './mock.todos.service';

describe('MockTodosService', () => {
  let service: MockTodosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockTodosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

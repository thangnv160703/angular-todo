import { TestBed } from '@angular/core/testing';

import { TodoReloadService } from './todo-reload.service';

describe('TodoReloadService', () => {
  let service: TodoReloadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoReloadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { TaskedService } from './tasked.service';

describe('TaskedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskedService = TestBed.get(TaskedService);
    expect(service).toBeTruthy();
  });
});

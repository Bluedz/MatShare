import { TestBed } from '@angular/core/testing';

import { TestGetDataService } from './test-get-data.service';

describe('TestGetDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestGetDataService = TestBed.get(TestGetDataService);
    expect(service).toBeTruthy();
  });
});

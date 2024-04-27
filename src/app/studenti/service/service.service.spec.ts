import { TestBed } from '@angular/core/testing';

import { StudenteService } from './studenteService';

describe('ServiceService', () => {
  let service: StudenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

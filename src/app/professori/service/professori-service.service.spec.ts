import { TestBed } from '@angular/core/testing';

import { ProfessoriService } from './professori-service.service';

describe('ProfessoriServiceService', () => {
  let service: ProfessoriService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfessoriService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

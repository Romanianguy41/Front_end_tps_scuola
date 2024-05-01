import { TestBed } from '@angular/core/testing';

import { InsegnaService } from './insegna.service';

describe('InsegnaService', () => {
  let service: InsegnaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsegnaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

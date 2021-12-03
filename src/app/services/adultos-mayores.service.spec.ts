import { TestBed } from '@angular/core/testing';

import { AdultosMayoresService } from './adultos-mayores.service';

describe('AdultosMayoresService', () => {
  let service: AdultosMayoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdultosMayoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

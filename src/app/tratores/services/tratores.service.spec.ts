import { TestBed } from '@angular/core/testing';

import { TratoresService } from './tratores.service';

describe('TratoresService', () => {
  let service: TratoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TratoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { TriggerEnvService } from './trigger-env.service';

describe('TriggerEnvService', () => {
  let service: TriggerEnvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TriggerEnvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ExamplesSoapService } from './examples-soap.service';

describe('ExamplesSoapService', () => {
  let service: ExamplesSoapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamplesSoapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

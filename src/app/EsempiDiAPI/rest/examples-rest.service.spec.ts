import { TestBed } from '@angular/core/testing';

import { ExamplesRestService } from './examples-rest.service';

describe('ExamplesRestService', () => {
  let service: ExamplesRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamplesRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

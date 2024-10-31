import { TestBed } from '@angular/core/testing';

import { ExamplesGraphqlService } from './examples-graphql.service';

describe('ExamplesGraphqlService', () => {
  let service: ExamplesGraphqlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamplesGraphqlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

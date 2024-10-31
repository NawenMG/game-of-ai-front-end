import { TestBed } from '@angular/core/testing';

import { ExamplesWebsocketService } from './examples-websocket.service';

describe('ExamplesWebsocketService', () => {
  let service: ExamplesWebsocketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamplesWebsocketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

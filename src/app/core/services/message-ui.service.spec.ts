import { TestBed } from '@angular/core/testing';

import { MessageUiService } from './message-ui.service';

describe('MessageUiService', () => {
  let service: MessageUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

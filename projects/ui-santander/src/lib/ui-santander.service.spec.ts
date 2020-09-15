import { TestBed } from '@angular/core/testing';

import { UiSantanderService } from './ui-santander.service';

describe('UiSantanderService', () => {
  let service: UiSantanderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiSantanderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

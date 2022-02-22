import { TestBed } from '@angular/core/testing';

import { Global.Services.TsService } from './global.services.ts.service';

describe('Global.Services.TsService', () => {
  let service: Global.Services.TsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Global.Services.TsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

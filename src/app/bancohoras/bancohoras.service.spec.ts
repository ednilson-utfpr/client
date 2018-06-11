import { TestBed, inject } from '@angular/core/testing';

import { BancohorasService } from './bancohoras.service';

describe('BancohorasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BancohorasService]
    });
  });

  it('should be created', inject([BancohorasService], (service: BancohorasService) => {
    expect(service).toBeTruthy();
  }));
});

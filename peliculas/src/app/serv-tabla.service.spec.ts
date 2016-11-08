/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServTablaService } from './serv-tabla.service';

describe('Service: ServTabla', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServTablaService]
    });
  });

  it('should ...', inject([ServTablaService], (service: ServTablaService) => {
    expect(service).toBeTruthy();
  }));
});

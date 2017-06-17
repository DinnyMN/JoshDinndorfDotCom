import { TestBed, inject } from '@angular/core/testing';

import { ItemsApiService } from './items-api.service';

describe('ItemsApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemsApiService]
    });
  });

  it('should ...', inject([ItemsApiService], (service: ItemsApiService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { MovieApiService } from './movieApi.service';

describe('MovieService', () => {
  let service: MovieApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

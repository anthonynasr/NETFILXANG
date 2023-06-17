import { TestBed } from '@angular/core/testing';

import { GenerateMoviesService } from './generate-movies.service';

describe('GenerateMoviesService', () => {
  let service: GenerateMoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerateMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

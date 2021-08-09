import { TestBed } from '@angular/core/testing';

import { ScoreCounterService } from './score-counter.service';

describe('ScoreCounterService', () => {
  let service: ScoreCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScoreCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

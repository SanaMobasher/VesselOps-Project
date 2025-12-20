import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; 
import { CrewService } from './crew'; 

describe('CrewService', () => {
  let service: CrewService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CrewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
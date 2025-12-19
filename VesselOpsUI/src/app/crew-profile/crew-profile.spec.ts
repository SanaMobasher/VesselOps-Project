import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewProfile } from './crew-profile';

describe('CrewProfile', () => {
  let component: CrewProfile;
  let fixture: ComponentFixture<CrewProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrewProfile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrewProfile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

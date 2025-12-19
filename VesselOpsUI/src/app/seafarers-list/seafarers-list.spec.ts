import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeafarersList } from './seafarers-list';

describe('SeafarersList', () => {
  let component: SeafarersList;
  let fixture: ComponentFixture<SeafarersList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeafarersList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeafarersList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

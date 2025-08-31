import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialEventsDetailsComponent } from './special-events-details.component';

describe('SpecialEventsDetailsComponent', () => {
  let component: SpecialEventsDetailsComponent;
  let fixture: ComponentFixture<SpecialEventsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialEventsDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialEventsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

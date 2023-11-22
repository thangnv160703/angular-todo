import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrudiDatepickerComponent } from './trudi-datepicker.component';

describe('TrudiDatepickerComponent', () => {
  let component: TrudiDatepickerComponent;
  let fixture: ComponentFixture<TrudiDatepickerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrudiDatepickerComponent]
    });
    fixture = TestBed.createComponent(TrudiDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

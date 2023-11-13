import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrudiCheckboxComponent } from './trudi-checkbox.component';

describe('TrudiCheckboxComponent', () => {
  let component: TrudiCheckboxComponent;
  let fixture: ComponentFixture<TrudiCheckboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TrudiCheckboxComponent]
    });
    fixture = TestBed.createComponent(TrudiCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrudiTextFieldComponent } from './trudi-text-field.component';

describe('TrudiTextFieldComponent', () => {
  let component: TrudiTextFieldComponent;
  let fixture: ComponentFixture<TrudiTextFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TrudiTextFieldComponent]
    });
    fixture = TestBed.createComponent(TrudiTextFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

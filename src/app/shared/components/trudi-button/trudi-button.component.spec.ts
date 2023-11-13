import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrudiButtonComponent } from './trudi-button.component';

describe('TrudiButtonComponent', () => {
  let component: TrudiButtonComponent;
  let fixture: ComponentFixture<TrudiButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TrudiButtonComponent]
    });
    fixture = TestBed.createComponent(TrudiButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

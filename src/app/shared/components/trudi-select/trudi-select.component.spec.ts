import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrudiSelectComponent } from './trudi-select.component';

describe('TrudiSelectComponent', () => {
  let component: TrudiSelectComponent;
  let fixture: ComponentFixture<TrudiSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TrudiSelectComponent]
    });
    fixture = TestBed.createComponent(TrudiSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

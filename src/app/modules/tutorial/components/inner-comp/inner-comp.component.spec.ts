import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerCompComponent } from './inner-comp.component';

describe('InnerCompComponent', () => {
  let component: InnerCompComponent;
  let fixture: ComponentFixture<InnerCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InnerCompComponent]
    });
    fixture = TestBed.createComponent(InnerCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

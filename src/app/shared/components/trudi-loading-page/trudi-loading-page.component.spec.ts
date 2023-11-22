import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrudiLoadingPageComponent } from './trudi-loading-page.component';

describe('TrudiLoadingPageComponent', () => {
  let component: TrudiLoadingPageComponent;
  let fixture: ComponentFixture<TrudiLoadingPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TrudiLoadingPageComponent]
    });
    fixture = TestBed.createComponent(TrudiLoadingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

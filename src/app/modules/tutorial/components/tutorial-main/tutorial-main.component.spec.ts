import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialMainComponent } from './tutorial-main.component';

describe('TutorialMainComponent', () => {
  let component: TutorialMainComponent;
  let fixture: ComponentFixture<TutorialMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TutorialMainComponent]
    });
    fixture = TestBed.createComponent(TutorialMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

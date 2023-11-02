import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTaskButtonComponent } from './edit-task-button.component';

describe('EditTaskButtonComponent', () => {
  let component: EditTaskButtonComponent;
  let fixture: ComponentFixture<EditTaskButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditTaskButtonComponent]
    });
    fixture = TestBed.createComponent(EditTaskButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

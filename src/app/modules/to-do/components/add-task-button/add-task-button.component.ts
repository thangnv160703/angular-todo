import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditTaskDialogComponent } from '../add-edit-task-dialog/add-edit-task-dialog.component';

@Component({
  selector: 'todo-add-task-button',
  templateUrl: './add-task-button.component.html',
  styleUrls: ['./add-task-button.component.scss']
})
export class AddTaskButtonComponent {
  constructor(private dialog: MatDialog) { }

  protected handleClick(): void {
    this.dialog.open(AddEditTaskDialogComponent, {
      data: {
        add: true
      }
    });
    console.log('button clicked');
  }
}

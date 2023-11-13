import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ITask } from 'src/app/shared/interfaces/ITask';
import { AddEditTaskDialogComponent } from '../add-edit-task-dialog/add-edit-task-dialog.component';

@Component({
  selector: 'todo-edit-task-button',
  templateUrl: './edit-task-button.component.html',
  styleUrls: ['./edit-task-button.component.scss']
})
export class EditTaskButtonComponent {
  @Input() task!: ITask;

  constructor(private dialog: MatDialog) {}

  protected handleClick(): void {
    this.dialog.open(AddEditTaskDialogComponent, {
      data: {
        add: false,
        task: this.task
      }
    })
  }
}

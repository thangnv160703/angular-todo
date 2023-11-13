import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteTaskDialogComponent } from '../delete-task-dialog/delete-task-dialog.component';
import { ITask } from 'src/app/shared/interfaces/ITask';

@Component({
  selector: 'todo-delete-task-button',
  templateUrl: './delete-task-button.component.html',
  styleUrls: ['./delete-task-button.component.scss']
})
export class DeleteTaskButtonComponent {
  @Input() task!: ITask;

  constructor(private dialog: MatDialog) { }

  protected handleClick(): void {
    this.dialog.open(DeleteTaskDialogComponent, {
      data: this.task
    });
  }
}

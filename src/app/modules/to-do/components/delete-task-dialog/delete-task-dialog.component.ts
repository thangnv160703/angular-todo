import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ITask } from 'src/app/shared/interfaces/ITask';
import { TodoReloadService } from '../../services/todo-reload.service';
import { TaskCrudService } from 'src/app/shared/services/task-crud.service';

@Component({
  selector: 'app-delete-task-dialog',
  templateUrl: './delete-task-dialog.component.html',
  styleUrls: ['./delete-task-dialog.component.scss']
})
export class DeleteTaskDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) protected data: ITask,
    private reloadSer: TodoReloadService,
    private taskCrudSer: TaskCrudService
  ) { }

  protected handleConfirmClick(): void {
    this.taskCrudSer.delete(this.data).subscribe(
      () => this.reloadSer.reload()
    )
  }
}

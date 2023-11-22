import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ITask } from 'src/app/shared/interfaces/ITask';
import { TodoReloadService } from '../../services/todo-reload.service';
import { TaskCrudService } from 'src/app/shared/services/task-crud.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface IAddEditDialog {
  task?: ITask
  add: boolean
}

@Component({
  selector: 'app-add-edit-task-dialog',
  templateUrl: './add-edit-task-dialog.component.html',
  styleUrls: ['./add-edit-task-dialog.component.scss']
})
export class AddEditTaskDialogComponent {
  protected title = new FormControl<string>('', [Validators.required, Validators.minLength(10)]);
  protected taskForm = new FormGroup({
    title: new FormControl<string>('', [Validators.required, Validators.minLength(10)]),
    note: new FormControl<string>(''),
    deadline: new FormControl<Date | null>(null),
    isCompleted: new FormControl<boolean>(false)
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) protected data: IAddEditDialog,
    private reloadSer: TodoReloadService,
    private taskCrudSer: TaskCrudService,
    private dialogRef: MatDialogRef<AddEditTaskDialogComponent>
  ) { }

  protected handleConfirmClick(): void {
    console.log(this.taskForm.value);
    this.dialogRef.close();
  }
}

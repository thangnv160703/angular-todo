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
  protected taskForm = new FormGroup({
    title: new FormControl<string>('', [Validators.required, Validators.minLength(5)]),
    note: new FormControl<string | undefined>(''),
    deadline: new FormControl<Date>(new Date()),
    isCompleted: new FormControl<boolean>(false)
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) protected data: IAddEditDialog,
    private reloadSer: TodoReloadService,
    private taskCrudSer: TaskCrudService,
    private dialogRef: MatDialogRef<AddEditTaskDialogComponent>
  ) { }

  ngOnInit(): void {
    if(this.data.task) {
      this.taskForm.get('title')?.setValue(this.data.task.title);
      this.taskForm.get('note')?.setValue(this.data.task.note);
      this.taskForm.get('deadline')?.setValue(this.data.task.deadline);
      this.taskForm.get('isCompleted')?.setValue(this.data.task.isCompleted);
    }
  }

  protected handleConfirmClick(): void {
    const newTask: ITask = {
      title: this.taskForm.get('title')?.value as string,
      note: this.taskForm.get('note')?.value as string,
      deadline: this.taskForm.get('deadline')?.value as Date,
      isCompleted: this.taskForm.get('isCompleted')?.value as boolean
    };
    if(this.data.add) {
      this.taskCrudSer.save(newTask).subscribe(
        () => this.reloadSer.reload()
      )
    } else {
      newTask.id = this.data.task?.id;
      this.taskCrudSer.update(newTask).subscribe(
        () => this.reloadSer.reload()
      );
    }

    this.dialogRef.close();
  }
}
